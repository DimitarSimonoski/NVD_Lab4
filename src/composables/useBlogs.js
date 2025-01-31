import { ref, onMounted } from 'vue';
import { createClient } from 'contentful';
import { List } from './useListAction.js';

export function useBlogs() {
    const client = createClient({
        space: '9pn0okrb8ws9',
        accessToken: '6XKVvPm2a1gAWAO5aVn5nOX5KruFFXwUz3YC9ZW8TR8',
    });


    const blogs = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const { addItem, deleteItem } = List(blogs.value);


    const fetchBlogs = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await client.getEntries({
                content_type: 'blogPost', // Replace with your content type ID
            });

            blogs.value = response.items.map((item) => ({
                id: item.sys.id, // Use the entry ID as the slug
                title: item.fields.title,
                description: item.fields.description,
                heroImage: item.fields.heroImage?.fields?.file?.url, // Access the image URL
                publishDate: item.fields.publishDate,
            }));
        } catch (err) {
            error.value = err;
            console.error('Error fetching blogs:', err);
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(() => {
        fetchBlogs();
    });

    return {
        blogs,
        isLoading,
        error,
        addItem,
        deleteItem,
        fetchBlogs,
    };
}