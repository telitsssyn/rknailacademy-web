// Услуги для секции «Запишитесь к мастеру».
// category: "manicure" | "pedicure" — используется для табов.

export type ServiceCategory = "manicure" | "pedicure";

export type Service = {
  name: string;
  price: string;
  category: ServiceCategory;
  image?: string; // /services/xxx.jpg
};

export const serviceCategories: { id: ServiceCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "manicure", label: "Маникюр" },
  { id: "pedicure", label: "Педикюр" },
];

export const services: Service[] = [
  { name: "Японский маникюр", price: "7000 тг", category: "manicure" },
  { name: "Маникюр без покрытия", price: "От 3500 тг", category: "manicure" },
  { name: "Наращивание ногтей", price: "От 9000 тг", category: "manicure" },
  { name: "Любой дизайн ногтя", price: "От 1000 тг", category: "manicure" },
  { name: "Ремонт ногтя", price: "От 1000 тг", category: "manicure" },
  { name: "Коррекция искусственных ногтей", price: "От 6000 тг", category: "manicure" },
  { name: "Маникюр с покрытием гель-лак", price: "От 7000 тг", category: "manicure" },
  { name: "Мужской маникюр", price: "От 4000 тг", category: "manicure" },
  { name: "Педикюр без покрытия", price: "От 8000 тг", category: "pedicure" },
  { name: "Педикюр с покрытием гель-лак", price: "От 9000 тг", category: "pedicure" },
];
