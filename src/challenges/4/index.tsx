export const Challenge4 = () => {
  return (
    <>
      <header>
        <h3>Challenge 4: Problem Solving and Software Design</h3>
      </header>
      <p>
        This challenge will test your problem solving and design skills with a
        more open ended task in mind.
        <br />
        Rather than writing code to solve this problem, we ask you to:
        <ol>
          <li>Carefully analyze the following information</li>
          <li>
            Describe the entities (people, things, etc.) involved in this
            problem. UML object diagrams may be used, but are not necessary if
            you feel you can more effectively describe the situation in words.
          </li>
          <li>
            Describe, in pseudo-code, how you would design such a scheduler.
            Wherever you make a significant choice, explain why you chose what
            you chose and what the tradeoffs and benefits are. If you are
            designing something to meet a specific requirement, let us know.
          </li>
        </ol>
        <code>src/challenges/4/solution.txt</code>
        <br />
      </p>
      <p>
        <h5>Task: </h5>
        At company X, we are responsible with holding music shows at a specific
        public location for our clients. These are referred to as "events".{" "}
        <br />
        <br />
        Each event must have a musician present so that we can have as many
        options as possible for our clients, which translates to more revenue
        for us.
        <br /> <br />
        There is more context to our operations, we have cities that each have a
        number of locations. For example, in NYC, you could watch a show near
        the Statue of Liberty, or in Central Park.
        <br /> <br />
        An <em>event</em> is held at one of these locations, and has three time
        blocks: morning, midday, and afternoon.
        <br /> <br />
        Due to labor laws, no musician should be scheduled for three time blocks
        in a row.
        <br /> <br />
        Musicians at company X are vetted and meet a certain standard of
        quality, however there are nonetheless some musicians who are better
        than others as indicated by client feedback - this is referred to as the
        musician's <em>rank</em>, where 1 is the lowest and 5 is the highest.
        <br />
        <br />
        Given a choice, we would like to schedule the highest quality musician
        available.
        <br /> <br />
        Your task is to create a simple scheduler that fulfills all the
        aforementioned criteria.
        <br />
        <hr />
        That's it for the task - if you have any questions, once again, please
        let us know (our contact info is on the intro page)!
      </p>
    </>
  );
};
