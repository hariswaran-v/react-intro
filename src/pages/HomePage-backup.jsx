import blogPosts from "../data/blog.json";

const HomePage = () => {
  const blogDataTemplate = blogPosts.map((post) => {
    return (
      <div
        className="bg-white p-5 flex items-center space-x-10 max-w-6xl mx-auto rounded mb-5"
        key={post.id}
      >
        <img className="w-20 h-20" src={post.image} alt="React logo" />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{post.title}</h4>
          <p className="text-sm">{post.description}</p>
        </div>
      </div>
    );
  });
  console.log(blogDataTemplate);

  return (
    <div className="m-10">
      <h4 className="text-2xl max-w-6xl mx-auto font-semibold mb-3">
        Recent post
      </h4>
      {blogDataTemplate}
    </div>
  );
};

export default HomePage;
