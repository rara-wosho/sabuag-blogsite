export default function StepsControls({
  numberOfSteps,
  activeStep,
  toggleSteps,
}) {
  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= numberOfSteps; i++) {
      dots.push(
        <div
          key={i}
          className={`step-dot mx-2 soft-transition rounded-circle ${
            i === activeStep ? "active bg-warning border" : ""
          }`}
          onClick={() => toggleSteps(i)}
        >
          {/* &#8226; */}
        </div>
      );
    }
    return dots;
  };

  return (
    <div className="steps-control px-1 d-flex align-items-center justify-content-between w-100">
      <button
        className="btn-warning btn rounded-3"
        onClick={() => toggleSteps(activeStep - 1)}
        disabled={activeStep === 1}
      >
        Prev
      </button>

      <div className="dots d-flex align-items-center">{renderDots()}</div>

      <button
        className="btn-warning btn rounded-3"
        onClick={() => toggleSteps(activeStep + 1)}
        disabled={activeStep === numberOfSteps}
      >
        Next
      </button>
    </div>
  );
}
