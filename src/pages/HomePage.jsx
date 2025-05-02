const HomePage = () => {
  const blogData = [
    {
      id: 1,
      title: "UI/UX Principles Every Developer Should Know",
      description:
        "This blog covers essential UI/UX principles like visual hierarchy, consistency, and accessibility. Learn how to design interfaces that are not only beautiful but also user-friendly and functional.",
      image:
        "https://img.freepik.com/premium-vector/white-background-with-black-blue-logo-that-says-u_697205-872.jpg",
    },
    {
      id: 2,
      title: "Responsive Design with Tailwind CSS",
      description:
        "Tailwind CSS makes it easy to build mobile-first responsive layouts. This article teaches you how to use utility classes to create interfaces that adapt seamlessly across devices.",
      image:
        "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png",
    },
    {
      id: 3,
      title: "React Props vs State: What's the Difference?",
      description:
        "Understanding how to use props and state correctly is key to building dynamic React apps. This guide explains the difference with examples, and when to use each in real-world components.",
      image: "https://adityarohilla.com/wp-content/uploads/2016/06/react.png",
    },
    {
      id: 4,
      title: "Designing Reusable Components in React",
      description:
        "Reusable components save time and promote cleaner code. Learn how to design scalable components using props, composition, and smart folder structures in your React apps.",
      image:
        "https://p7.hiclipart.com/preview/436/130/342/web-development-responsive-web-design-web-site.jpg",
    },
    {
      id: 5,
      title: "Improving UX with Controlled Components",
      description:
        "Controlled components let you manage form input state with precision. Discover how to improve user experience in forms using controlled inputs, validation, and feedback in React.",
      image:
        "https://trudo.tech/wp-content/uploads/2022/03/Key-Components-for-Designing-Mobile-App.png",
    },
  ];

  const blogDataTemplate = blogData.map((post) => {
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

  // console.log(blogData[3]);

  return (
    <div className="m-10">
      <h4 className="text-2xl max-w-6xl mx-auto font-semibold mb-3">
        Recent post
      </h4>
      {/* <div className="bg-white p-10 flex items-center space-x-10 rounded">
        <img
          className="w-20 h-20"
          src="https://adityarohilla.com/wp-content/uploads/2016/06/react.png"
          alt="React logo"
        />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">
            Anbu is preparing ReactJS Course Material
          </h4>
          <p>He is delaying for last few decades!</p>
        </div>
      </div> */}
      {blogDataTemplate}
    </div>
  );
};

export default HomePage;
