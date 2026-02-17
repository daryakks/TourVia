export const getAllCountries = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );

    if (!response.ok) {
      throw new Error("Ошибка загрузки стран");
    }

    const data = await response.json();

    return data
      .map((country) => ({
        name: country.name.common,
        flag: country.flags.svg,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};
