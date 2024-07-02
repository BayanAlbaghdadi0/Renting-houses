const handleSubmit = () => {
  const formData = useContext(FormContext); // الوصول إلى قيم الـ context

  // يمكنك هنا تحديث قيم الـ context بقيم الـ inputs
  formData.selectedFile = selectedFile;
  formData.selectedCity = selectedCity;
  formData.salary = salary;
  formData.area = area;
  formData.bedrooms = bedrooms;
  formData.floorHeight = floorHeight;
  formData.description = description;

  console.log('Updated Form Data:', formData);

  // عمل fetch على API بعد تخزين البيانات داخل الـ context
  fetch('http://localhost:5000/owner', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response from API:', data);
      // يمكنك هنا التعامل مع البيانات المسترجعة من الAPI
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}