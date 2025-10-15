
function testCard6Slider() {
  console.log("🧪 Starting Card6Slider test...");

  const slider = document.querySelector('.card-6-slider');
  const slides = document.querySelectorAll('.slide');
  
  if (!slider || slides.length === 0) {
    console.error("❌ Slider or slides not found in DOM.");
    return;
  }

  const initialTransform = slider.style.transform || "none";

  console.log("➡️ Moving forward 1 step...");
  moveCard6Slide(1);
  const afterMoveTransform = slider.style.transform;

  if (afterMoveTransform !== initialTransform && afterMoveTransform !== "none") {
    console.log("✅ PASS: Slider transform changed after moving forward:", afterMoveTransform);
  } else {
    console.error("❌ FAIL: Slider transform did not change.");
  }

  console.log("⬅️ Moving backward 1 step...");
  moveCard6Slide(-1);
  const backTransform = slider.style.transform;

  if (backTransform !== afterMoveTransform) {
    console.log("✅ PASS: Slider moved back correctly:", backTransform);
  } else {
    console.error("❌ FAIL: Slider did not move back.");
  }

  console.log("✅ Test complete!");
}