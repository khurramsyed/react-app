import { useState } from "react";

const Accordion = () => {
  const items = ["Item 1 ", "Item 2", "Item 3 ", "Item 4"];
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  function handleClick(index: number) {
    // Toggle logic: if clicking the same item, collapse it; otherwise, expand the new item
    setSelectedItemIndex(selectedItemIndex === index ? -1 : index);
  }

  return (
    <>
      <div className="accordion" id="emptyAccordion">
        {items.length === 0 ? "<p>No Items Found</p>" : null}
      </div>
      {items.map((item, index) => (
        <div className="accordion" id={`accordionExample-${index}`} key={index}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                onClick={() => handleClick(index)}
                aria-expanded={index === selectedItemIndex}
                aria-controls={`collapse-${index}`}
              >
                Accordion Item # {index + 1}
              </button>
            </h2>

            <div
              id={`collapse-${index}`}
              className={
                index === selectedItemIndex
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse"
              }
              data-bs-parent={`#accordionExample-${index}`}
            >
              <div className="accordion-body">
                <strong>{item}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
