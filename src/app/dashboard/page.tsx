export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1>Dashboard</h1>

      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal lg:left-72 cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </main>
  );
}
