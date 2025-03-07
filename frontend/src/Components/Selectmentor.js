import { Link } from "react-router-dom";
import img from "../assets/profile.png";
const people = [
  {
    id: 1,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 2,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 3,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 4,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 5,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 6,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 7,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 8,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 9,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 10,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 11,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 12,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 13,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 14,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 15,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 16,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 17,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
  {
    id: 18,
    name: "Piyush",
    role: "Software Engineer, Tech Content Creator",
    tag: "Software Leader",
    img: img,
  },
];

export function SelectMentor() {
  return (
    <div className="min-h-screen bg-richblue-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Choose Mentor
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {people.map((person) => (
          <Link
            to={`/select-mentor/${person.id}`}
            key={person.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                {person.tag}
              </span>
              <h2 className="text-lg font-semibold mt-2">{person.name}</h2>
              <p className="text-gray-600 text-sm">{person.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
