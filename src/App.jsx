import React from "react";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="h-screen my-20">
      <Home
        title="Tailwindcss pros and cons"
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
        ]}
        cons={[
          "Some team members may find the utility-first approach initially challenging",
          "Limited support for global stylesm,which might be needed for certain design paterns",
        ]}
        isFirst
      />

      <Home
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
          "In conclusion, Tailwind CSS is a powerful tool that offers many advantages, including rapid development"
        ]}
      />

      <Home
        cons={[
          "Some team members may find the utility-first approach initially challenging",
          "Limited support for global stylesm,which might be needed for certain design paterns",
        ]}
      />

      <Home
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
          "In conclusion, Tailwind CSS is a powerful tool that offers many advantages, including rapid development"
        ]}
        cons={[
          "Some team members may find the utility-first approach initially challenging",
          "Limited support for global stylesm,which might be needed for certain design paterns",
        ]}
      />

      <Home
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
          "In conclusion, Tailwind CSS is a powerful tool that offers many advantages, including rapid development"
        ]}
      />

      <Home
        cons={[
          "Some team members may find the utility-first approach initially challenging",
          "Limited support for global stylesm,which might be needed for certain design paterns",
        ]}
      />

      <Home
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
          "This is Tailwind Pros and cons card design."
        ]}
        cons={[
          "Some team members may find the utility-first approach initially challenging",
          "Limited support for global stylesm,which might be needed for certain design paterns",
          "Limited support for global stylesm,which might be needed for certain design paterns",
        ]}
      />

      <Home
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
        ]}
      />
      <Home
        cons={[
          "Some team members may find the utility-first approach initially challenging",
          "Limited support for global stylesm,which might be needed for certain design paterns",
          "Limited support for global stylesm,which might be needed for certain design paterns",
        ]}
      />

      <Home
        last={"Tailwind pros ✅"}
        pros={[
          "Enables fast and efficient styling with pre-defined utility classes",
          "Highly customizable through configuration, allowing you to tailor styles to your project's needs",
        ]}
        isLast
      ></Home>
    </div>
  );
}

export default App;
