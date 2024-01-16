const Contact = () => {
  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl p-2">Contact Page</h1>
      <form action="">
        <input className="border border-black p-2 m-2" type="text" placeholder="Name" />
        <input className="border border-black p-2 m-2" type="text" placeholder="Message" />
        <button className="border border-black p-2 m-2 hover:bg-orange-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
