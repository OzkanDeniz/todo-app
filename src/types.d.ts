interface ITodoType {
    task: string;
    isDone: boolean;
    id: string | number;
    owner?: string; //! bu alan zorunlu değil, optional. Eğer varsa type string olur. Objelerde interface kullanılır.
  }

//   export etmemize sağlayan sayfa