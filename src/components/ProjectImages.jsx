import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ProjectImages() {
  return (
    <Carousel>
      <div>
        <img src="https://cdn.dribbble.com/users/3794257/screenshots/14932931/media/58ec86ff61bbb9e9258a8102c3a7bc05.png?compress=1&resize=400x300&vertical=top" />
      </div>
      <div>
        <img src="https://cdn.dribbble.com/users/225019/screenshots/16269115/media/2837bcc9454bf81b1281aaf93e0f520f.png?compress=1&resize=400x300&vertical=top" />
      </div>
    </Carousel>
  );
}

export default ProjectImages;
