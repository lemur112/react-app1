import React, { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
 
const CourseRegistration = () => {
  const courses = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];
  const [formData, setFormData] = useState({
    imie: '',
    nazwisko: '',
    kurs: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.firstName && formData.lastName && formData.selectedCourse)
    {
      alert(`${formData.firstName} ${formData.lastName} zapisał/a się na ${formData.selectedCourse}`);
    }else
    {
      alert('Brak wszystkich danych!');
    }
  };
 
  return (
    <div>
      <h1>Liczba kursów: {courses.length}</h1>
      <ol>
        {courses.map((course, index) =>
        (
          <li key={index}>{course}</li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Imię</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Nazwisko</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        
        <div className="mb-3">
          <label htmlFor="selectedCourse" className="form-label">Kurs</label>
          <select className="form-select" id="selectedCourse" name="selectedCourse" value={formData.selectedCourse} onChange={handleChange}>
            <option value="">Wybierz kurs</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Dodaj do kursu</button>
      </form>
    </div>
  );
};
 
export default CourseRegistration;