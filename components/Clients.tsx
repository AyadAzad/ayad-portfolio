"use client";

import React from "react";

import { skills} from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My Software Engineering
        <span className="text-purple"> Skills</span>
      </h1>
        <InfiniteMovingCards items={skills} >
          {skills.map((skill) => (
            <React.Fragment key={skill.id}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="md:w-20 w-10"
                />
            </React.Fragment>
          ))}
        </InfiniteMovingCards>
    </section>
  );
};

export default Clients;
