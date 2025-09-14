const LibraryDetails = ({ library }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Library Details</h2>
      <p><strong>Total Books:</strong> {library.totalBooks}</p>
      <p><strong>Librarian:</strong> {library.librarian}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Categories</h3>
      <ul className="list-disc pl-5">
        {library.categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
  
  export default LibraryDetails;