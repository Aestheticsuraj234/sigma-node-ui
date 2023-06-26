import { useContext, useRef } from "react";
import { GlobalContext } from "@/context/globalContext";
import Link from "next/link";

const UpdateCard = () => {
  const { handleToggleUpdateCard, toggleUpdateCard } = useContext(GlobalContext);
  const containerRef = useRef(null); // Reference to the container element

  const UpdateList = [

    // Add Your update data here
    {
      id: 1,
      Heading: "Update 1",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 2,
      Heading: "Update 2",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 3,
      Heading: "Update 3",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 4,
      Heading: "Update 4",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 5,
      Heading: "Update 5",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      id: 6,
      Heading: "Update 6",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },

  ];

  const handleHeadingClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(`heading-${id}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-16 right-auto bottom-28 left-auto w-full max-w-md p-4 glassmorphism border border-gray-200 rounded-lg shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 text-center">Latest Updates</h5>
      </div>
      <div className="flow-root h-64 overflow-y-auto" ref={containerRef}>
        <ul role="list" className="divide-y divide-gray-200">
          {UpdateList &&
            UpdateList.map((data) => (
              <Link href="#" key={data.id} onClick={(event) => handleHeadingClick(event, data.id)} className="block py-3 sm:py-4 hover:bg-white/50 px-3 rounded-md">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="bg-green-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                      New
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {data.Heading}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {data.SubHeading}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </ul>
      </div>
      {UpdateList &&
        UpdateList.map((data) => (
          <div id={`heading-${data.id}`} key={data.id} className="py-6">
            <h6 className="text-lg font-semibold">{data.Heading}</h6>
            <p className="text-gray-700">{data.SubHeading}</p>
          </div>
        ))}
    </div>
  );
};

export default UpdateCard;
