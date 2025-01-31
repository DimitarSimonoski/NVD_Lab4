Activity 5.01 – creating a BlogView component with the
Composition API
To access the code file for this activity, refer to https://github.com/PacktPublishing/
Frontend-Development-Projects-with-Vue.js-3/tree/v2-edition/Chapter05/
Activity5.01
This activity aims to leverage your knowledge in combining different Composition APIs with
components’ props and events to create a view in which the user can see a list of blogs and add or
remove any blog item.
This activity will require the use of a headless CMS, Contentful. The access keys and endpoints are
listed in the solution.
Follow these steps to complete this activity:
1. Create a new Vue project with Vite.
2. Install the contentful dependency into your project.
3. Create another composable, useListAction, which receives a list of items, and returns
the following:
 addItem: Adds a new item to the given list
 deleteItem: Deletes an item based on its ID
4. Create a useBlogs composable, which will fetch blogs from Contentful and use
useListActions() to get the actions for the fetched blogs.
5. Define useBlogs to return the blogs list, a loading status, an error for the fetch status,
and the addItem and deleteItem actions received from useListActions. The returned
blogs should be an array of blog items with the following fields: title, description,
heroImage, publishDate, and id (a slug).
6. Create a useSearch composable, which receives a list of items, and returns the following:
 searchTerm: The search value.
 filters: A list of fields to filter based on the user’s choice. By default, it’s title.
 filteredItems: The filtered list of the given items.
7. Create a BlogEditor component that displays several input fields for the title field, the
author’s name, the blog’s id field, textarea for the blog’s content, and a button element
for saving the blog. When this button is clicked, BlogEditor emits an addNewItem event
with the new blog’s details as the payload and resets the fields.
246 The Composition API
8. Create a Blogs component that receives a list of blogs, an isLoading flag, and an error
object as its props and then renders the state of the component according to isLoading and
error and the details of each blog item on the UI when applicable.
9. In Blogs, use useSearch() on the list of blogs received as props and display a search
input field to allow users to filter the blogs according to title.
10. Replace the original list iterations with the filtered list of blogs.
11. We then add fieldset containing two input fields of the checkbox type, each binding
to the array of filters. The two input fields will also have corresponding labels of By title
or By content, with values of title and description respectively.
12. Add a button element to each row of the blog rendered in the blog list, with a Remove label.
13. Also, define an emit event, deleteBlog, for Blogs.
14. On clicking on the Remove button, the component should emit a deleteBlog event with
the id value of the blog item as its payload.
15. Create a BlogView component that renders BlogEditor and Blogs.
16. In BlogView, create a toggle flag, showEditor, which will display BlogEditor if true.
Otherwise, the component will display an Add new blog button that toggles the showEditor
value when clicked on.
17. BlogView will use useBlogs() and pass the data received from this composable (blogs,
isLoading, error, and deleteItem) as props and events to Blogs. You should bind
deleteItem to the deleteBlog custom event of Blogs.
18. BlogView also binds the addItem method returned from useBlogs() to the addNewItem
event of BlogEditor.
19. Add some CSS styling to the components accordingly
