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
  { name: "Японский маникюр", price: "7000 тг", category: "manicure", image: "/services/service-1.jpg" },
  { name: "Маникюр без покрытия", price: "От 3500 тг", category: "manicure", image: "/services/service-2.jpg" },
  { name: "Наращивание ногтей", price: "От 9000 тг", category: "manicure", image: "/services/service-3.jpg" },
  { name: "Любой дизайн ногтя", price: "От 1000 тг", category: "manicure", image: "/services/service-4.jpg" },
  { name: "Ремонт ногтя", price: "От 1000 тг", category: "manicure", image: "/services/service-5.jpg" },
  { name: "Коррекция искусственных ногтей", price: "От 6000 тг", category: "manicure", image: "/services/service-6.jpg" },
  { name: "Маникюр с покрытием гель-лак", price: "От 7000 тг", category: "manicure", image: "/services/service-7.jpg" },
  { name: "Мужской маникюр", price: "От 4000 тг", category: "manicure", image: "/services/service-8.jpg" },
  { name: "Педикюр без покрытия", price: "От 8000 тг", category: "pedicure", image: "/services/service-9.jpg" },
  { name: "Педикюр с покрытием гель-лак", price: "От 9000 тг", category: "pedicure", image: "/services/service-10.jpg" },
];
