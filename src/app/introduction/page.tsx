import React from 'react';

export default function Page() {

  return (
    <div className="faq-container">
    <div className="faq-item">
      <h2 className="faq-question">What is Stable Diffusion 3 Medium?</h2>
      <div className="faq-answer">
        <p>Stable Diffusion 3 Medium is a version of the Stable Diffusion 3 model by Stability AI. It generates high-quality images from text prompts using advanced diffusion transformer architecture and flow matching technology.</p>
      </div>
    </div>
    <div className="faq-item">
      <h2 className="faq-question">What are the key features of this model?</h2>
      <div className="faq-answer">
        <ul>
          <li>Enhanced multi-subject image generation</li>
          <li>Improved image quality and resolution</li>
          <li>Advanced text generation capabilities</li>
          <li>Utilizes diffusion transformer architecture</li>
          <li>Flow matching technology for clearer images</li>
          <li>Versatile and scalable</li>
          <li>Available for personal and commercial use</li>
        </ul>
      </div>
    </div>
  </div>
  );
}
