export const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__paragraph">
          Got a technical issue? Want to send feedback about a beta feature? Let
          Us Know
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="How we can help you"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your MMessage
            </label>
            <textarea
              style={{ resize: "none" }}
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a Message"
              className="form__input mt-1"
            />
          </div>
          <button className="btn rounded-xl sm:w-fit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
