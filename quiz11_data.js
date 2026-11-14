/**
 * SWD392 Quiz 11 Data - Fall 2024 Final Exam (FA24 - FE3001)
 * 60 Questions extracted from Quiz11 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ11_DATA = [
  {
    "id": 1,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001.webp",
    "question": "What is a software architecture?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a building."
      },
      {
        "key": "B",
        "text": "The structure of a Client/Server system."
      },
      {
        "key": "C",
        "text": "The overall structure of a software system."
      },
      {
        "key": "D",
        "text": "The software classes and their relationships."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The structure of a Client/Server system.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a building.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The structure of a Client/Server system.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The overall structure of a software system.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software classes and their relationships.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (45).webp",
    "question": "Which of the following properties DOES NOT apply to a service?",
    "options": [
      {
        "key": "A",
        "text": "Reusable"
      },
      {
        "key": "B",
        "text": "Discoverable"
      },
      {
        "key": "C",
        "text": "Fixed"
      },
      {
        "key": "D",
        "text": "Autonomous"
      }
    ],
    "answer": "C",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Fixed\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Reusable\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Discoverable\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: Fixed. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"Autonomous\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (44).webp",
    "question": "What is a server?",
    "options": [
      {
        "key": "A",
        "text": "A hardware/software system that serves customers"
      },
      {
        "key": "B",
        "text": "A subsystem that makes requests and waits for the responses"
      },
      {
        "key": "C",
        "text": "A subsystem that responds to requests from clients"
      },
      {
        "key": "D",
        "text": "A hardware/softuare system that provides one or more services for multiple clients"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A subsystem that makes requests and waits for the responses\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A hardware/software system that serves customers\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A subsystem that makes requests and waits for the responses. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A subsystem that responds to requests from clients\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A hardware/softuare system that provides one or more services for multiple clients\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (43).webp",
    "question": "When mapping an aggregation hierarchy to a relational table, which of the following is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "The aggregate and part tables have different primary keys _"
      },
      {
        "key": "B",
        "text": "The aggregate and part tables have the same primary key"
      },
      {
        "key": "C",
        "text": "The primary key of the aggregate table is a foreign key of the part table."
      },
      {
        "key": "D",
        "text": "The primary key of the part table is a foreign key of the aggregate table."
      }
    ],
    "answer": "B",
    "hint": "Quan hệ Aggregation là quan hệ toàn thể - bộ phận dạng yếu (whole/part), các đối tượng con tồn tại độc lập.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The aggregate and part tables have the same primary key\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The aggregate and part tables have different primary keys _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The aggregate and part tables have the same primary key. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The primary key of the aggregate table is a foreign key of the part table.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The primary key of the part table is a foreign key of the aggregate table.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (46).webp",
    "question": "What is a transaction?",
    "options": [
      {
        "key": "A",
        "text": "Consists of buo or more operations"
      },
      {
        "key": "B",
        "text": "Consists of one operation"
      },
      {
        "key": "C",
        "text": "Consists of buo or more operations that are indivisible"
      },
      {
        "key": "D",
        "text": "Consists of buo or more operations that are divisible"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Consists of one operation\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Consists of buo or more operations\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Consists of one operation. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Consists of buo or more operations that are indivisible\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Consists of buo or more operations that are divisible\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (49).webp",
    "question": "During application deployment:",
    "options": [
      {
        "key": "A",
        "text": "The application is executed."
      },
      {
        "key": "B",
        "text": "Component instances are executed."
      },
      {
        "key": "C",
        "text": "Component instances are assigned to hardware nodes."
      },
      {
        "key": "D",
        "text": "Component instances are instantiated"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Component instances are executed.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The application is executed.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Component instances are executed.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Component instances are assigned to hardware nodes.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Component instances are instantiated\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (48).webp",
    "question": "What does a component interface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The externally visible operations of a component"
      },
      {
        "key": "B",
        "text": "The operations provided by a component"
      },
      {
        "key": "C",
        "text": "The operations required by a component"
      },
      {
        "key": "D",
        "text": "The operations that a component supports"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The operations provided by a component\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The externally visible operations of a component\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The operations provided by a component. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The operations required by a component\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The operations that a component supports\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (47).webp",
    "question": "What is a service-oriented architecture (SOA)?",
    "options": [
      {
        "key": "A",
        "text": "distributed software architecture consisting of multiple related services"
      },
      {
        "key": "B",
        "text": "distributed software architecture consisting of multiple autonomous services"
      },
      {
        "key": "C",
        "text": "distributed client/service architecture"
      },
      {
        "key": "D",
        "text": "distributed software architecture"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"distributed software architecture consisting of multiple autonomous services\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"distributed software architecture consisting of multiple related services\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: distributed software architecture consisting of multiple autonomous services. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"distributed client/service architecture\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"distributed software architecture\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (39).webp",
    "question": "Which of the following is NOT allowed through inheritance?",
    "options": [
      {
        "key": "A",
        "text": "Subclass inherits attributes from superclass."
      },
      {
        "key": "B",
        "text": "Subclass inherits operations from superclass."
      },
      {
        "key": "C",
        "text": "Subclass redefines attributes inherited from superclass."
      },
      {
        "key": "D",
        "text": "Subclass redefines operations inherited from superclass."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Subclass inherits operations from superclass.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Subclass inherits attributes from superclass.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Subclass inherits operations from superclass.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Subclass redefines attributes inherited from superclass.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Subclass redefines operations inherited from superclass.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (38).webp",
    "question": "Which of the following subsystems is NOT likely to be a client subsystem?",
    "options": [
      {
        "key": "A",
        "text": "Control subsystem"
      },
      {
        "key": "B",
        "text": "user interaction subsystem"
      },
      {
        "key": "C",
        "text": "Service subsystem"
      },
      {
        "key": "D",
        "text": "VO subsystem"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"user interaction subsystem\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: user interaction subsystem. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Service subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"VO subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (37).webp",
    "question": "Which of the following objects should be assigned to the same subsystem?",
    "options": [
      {
        "key": "A",
        "text": "Objects that are part of the same composite object"
      },
      {
        "key": "B",
        "text": "Client and server objects"
      },
      {
        "key": "C",
        "text": "user interface and entity objects"
      },
      {
        "key": "D",
        "text": "Objects that are associated with each other"
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Client and server objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Objects that are part of the same composite object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Client and server objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"user interface and entity objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Objects that are associated with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (4).webp",
    "question": "How is an actor depicted on a use case diagram?",
    "options": [
      {
        "key": "A",
        "text": "An oval"
      },
      {
        "key": "B",
        "text": "A stick figure"
      },
      {
        "key": "C",
        "text": "A box"
      },
      {
        "key": "D",
        "text": "A dashed line"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A stick figure\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An oval\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A stick figure. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A box\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A dashed line\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (42).webp",
    "question": "What is a database wrapper class?",
    "options": [
      {
        "key": "A",
        "text": "A class that encapsulates a data structure"
      },
      {
        "key": "B",
        "text": "A class that encapsulates a database"
      },
      {
        "key": "C",
        "text": "A class that encapsulates the details of how to access data in a database"
      },
      {
        "key": "D",
        "text": "A class that encapsulates a relational table"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A class that encapsulates a database\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A class that encapsulates a data structure\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A class that encapsulates a database. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A class that encapsulates the details of how to access data in a database\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A class that encapsulates a relational table\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (41).webp",
    "question": "In object-oriented design, polymorphism means that:",
    "options": [
      {
        "key": "A",
        "text": "Different classes may have the same name."
      },
      {
        "key": "B",
        "text": "Different classes may have the same interface name."
      },
      {
        "key": "C",
        "text": "Different classes may have the same superclass name"
      },
      {
        "key": "D",
        "text": "Different classes may have the same operation name."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Different classes may have the same interface name.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Different classes may have the same name.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Different classes may have the same interface name.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Different classes may have the same superclass name\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Different classes may have the same operation name.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (40).webp",
    "question": "Which of the following is unlikely to be encapsulated in a business logic class?",
    "options": [
      {
        "key": "A",
        "text": "A business rule"
      },
      {
        "key": "B",
        "text": "Calls to operations of an entity class"
      },
      {
        "key": "C",
        "text": "Deny cash withdrawal if balance of account is less than SIO"
      },
      {
        "key": "D",
        "text": "A dialog box"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Calls to operations of an entity class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A business rule\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Calls to operations of an entity class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Deny cash withdrawal if balance of account is less than SIO\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A dialog box\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (5).webp",
    "question": "How is public visibility depicted for a class element on a class diagram?",
    "options": [
      {
        "key": "A",
        "text": "+ sign"
      },
      {
        "key": "B",
        "text": "- sign"
      },
      {
        "key": "C",
        "text": "# sign"
      },
      {
        "key": "D",
        "text": "*sign"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"- sign\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"+ sign\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: - sign. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"# sign\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"*sign\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (59).webp",
    "question": "What do software quality attributes address?",
    "options": [
      {
        "key": "A",
        "text": "Software functional requirements"
      },
      {
        "key": "B",
        "text": "Software nonfunctional requirements"
      },
      {
        "key": "C",
        "text": "Software performance requirements"
      },
      {
        "key": "D",
        "text": "_ Software availability requirements"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Software nonfunctional requirements\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Software functional requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Software nonfunctional requirements. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Software performance requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ Software availability requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (58).webp",
    "question": "What is modifiability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which software is capable of being modified after deployment"
      },
      {
        "key": "B",
        "text": "The extent to which software is capable of being modified after initial development"
      },
      {
        "key": "C",
        "text": "The extent to which software is capable of being modified during and after initial development"
      },
      {
        "key": "D",
        "text": "The extent to which software is capable of being changed before deployment"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The extent to which software is capable of being modified after initial development\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The extent to which software is capable of being modified after deployment\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The extent to which software is capable of being modified after initial development. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The extent to which software is capable of being modified during and after initial development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The extent to which software is capable of being changed before deployment\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (57).webp",
    "question": "What is maintainability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which software is capable of being changed before deployment"
      },
      {
        "key": "B",
        "text": "The extent to which software is capable of being changed after deployment"
      },
      {
        "key": "C",
        "text": "The extent to which software is capable of being changed during development"
      },
      {
        "key": "D",
        "text": "The extent to which software is capable of being changed after development"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The extent to which software is capable of being changed after deployment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The extent to which software is capable of being changed before deployment\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The extent to which software is capable of being changed after deployment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The extent to which software is capable of being changed during development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The extent to which software is capable of being changed after development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (6).webp",
    "question": "What is evolutionary prototyping?",
    "options": [
      {
        "key": "A",
        "text": "Phased software development"
      },
      {
        "key": "B",
        "text": "Throwaway prototyping"
      },
      {
        "key": "C",
        "text": "Risk-driven development"
      },
      {
        "key": "D",
        "text": "Incremental development"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Throwaway prototyping\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Phased software development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Throwaway prototyping. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Risk-driven development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Incremental development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (9).webp",
    "question": "What is inheritance?",
    "options": [
      {
        "key": "A",
        "text": "A mechanism for inheriting characteristics from a parent"
      },
      {
        "key": "B",
        "text": "A mechanism for sharing and reusing code between classes"
      },
      {
        "key": "C",
        "text": "A mechanism for sharing data between classes"
      },
      {
        "key": "D",
        "text": "A mechanism for hiding information between classes"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A mechanism for sharing and reusing code between classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A mechanism for inheriting characteristics from a parent\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A mechanism for sharing and reusing code between classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A mechanism for sharing data between classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A mechanism for hiding information between classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (8).webp",
    "question": "What is a software life cycle?",
    "options": [
      {
        "key": "A",
        "text": "The life of the software"
      },
      {
        "key": "B",
        "text": "A cyclic approach to developing software"
      },
      {
        "key": "C",
        "text": "A phased approach to developing software"
      },
      {
        "key": "D",
        "text": "The life of software developed in cycles"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A cyclic approach to developing software\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The life of the software\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A cyclic approach to developing software. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A phased approach to developing software\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The life of software developed in cycles\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (7).webp",
    "question": "What is Ihuhite box\" testing?",
    "options": [
      {
        "key": "A",
        "text": "unit testing"
      },
      {
        "key": "B",
        "text": "Integration testing"
      },
      {
        "key": "C",
        "text": "Testing with knowledge of the system internals"
      },
      {
        "key": "D",
        "text": "Testing without knowledge of the software internals"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Integration testing\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"unit testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Integration testing. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Testing with knowledge of the system internals\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Testing without knowledge of the software internals\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (52).webp",
    "question": "What is the difference between an active object and a passive object?",
    "options": [
      {
        "key": "A",
        "text": "An active object controls a passive object"
      },
      {
        "key": "B",
        "text": "An active object does not have a thread of control; a passive object has a thread of control"
      },
      {
        "key": "C",
        "text": "An active object executes in a distributed system; a passive object executes in a centralized system."
      },
      {
        "key": "D",
        "text": "An active object has a thread of control; a passive object does not have a thread of control."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An active object does not have a thread of control; a passive object has a thread of control\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An active object controls a passive object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An active object does not have a thread of control; a passive object has a thread of control. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An active object executes in a distributed system; a passive object executes in a centralized system.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An active object has a thread of control; a passive object does not have a thread of control.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (51).webp",
    "question": "What is a periodic task?",
    "options": [
      {
        "key": "A",
        "text": "A task that responds to each message it receives"
      },
      {
        "key": "B",
        "text": "A task that is activated by a timer event"
      },
      {
        "key": "C",
        "text": "A task that is activated by an external event"
      },
      {
        "key": "D",
        "text": "A task that is activated by an input event"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A task that is activated by a timer event\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that responds to each message it receives\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A task that is activated by a timer event. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A task that is activated by an external event\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A task that is activated by an input event\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (50).webp",
    "question": "What is an advantage of localized autonomy in component-based design?",
    "options": [
      {
        "key": "A",
        "text": "If a component goes down, other components can continue to execute."
      },
      {
        "key": "B",
        "text": "Components execute concurrently."
      },
      {
        "key": "C",
        "text": "Components are distributed"
      },
      {
        "key": "D",
        "text": "Components communicate using messages."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Components execute concurrently.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"If a component goes down, other components can continue to execute.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Components execute concurrently.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Components are distributed\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Components communicate using messages.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (53).webp",
    "question": "What is an event-driven input task?",
    "options": [
      {
        "key": "A",
        "text": "A task that executes every few seconds"
      },
      {
        "key": "B",
        "text": "A task that controls other tasks"
      },
      {
        "key": "C",
        "text": "A task that receives inputs from an external device when it generates interrupts"
      },
      {
        "key": "D",
        "text": "A task that checks whether there is new input from an external device"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A task that controls other tasks\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that executes every few seconds\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A task that controls other tasks. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A task that receives inputs from an external device when it generates interrupts\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A task that checks whether there is new input from an external device\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (56).webp",
    "question": "What is a SPL feature group?",
    "options": [
      {
        "key": "A",
        "text": "A collection of features"
      },
      {
        "key": "B",
        "text": "A group of features with a partiular constraint on their usage in a SPL member"
      },
      {
        "key": "C",
        "text": "A group of mutually exclusive features"
      },
      {
        "key": "D",
        "text": "A group of optional features with a particular constraint on their usage in a SPL member"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A group of features with a partiular constraint on their usage in a SPL member\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A collection of features\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A group of features with a partiular constraint on their usage in a SPL member. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A group of mutually exclusive features\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A group of optional features with a particular constraint on their usage in a SPL member\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (55).webp",
    "question": "What is a use case variation point?",
    "options": [
      {
        "key": "A",
        "text": "A variable use case"
      },
      {
        "key": "B",
        "text": "A location in the use case at which change can occur"
      },
      {
        "key": "C",
        "text": "An alternative use case"
      },
      {
        "key": "D",
        "text": "A location in the use case where an alternative path can start"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A location in the use case at which change can occur\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A variable use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A location in the use case at which change can occur. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An alternative use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A location in the use case where an alternative path can start\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (54).webp",
    "question": "What is a kernel class in a SPL?",
    "options": [
      {
        "key": "A",
        "text": "An entity class in the SPL"
      },
      {
        "key": "B",
        "text": "A SPL class that stores essential data"
      },
      {
        "key": "C",
        "text": "A class that is required by all members of the SPL"
      },
      {
        "key": "D",
        "text": "An external class to the SPL"
      }
    ],
    "answer": "C",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A class that is required by all members of the SPL\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An entity class in the SPL\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"A SPL class that stores essential data\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: A class that is required by all members of the SPL. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"An external class to the SPL\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (36).webp",
    "question": "Objects that are in geographically different locations should be:",
    "options": [
      {
        "key": "A",
        "text": "In the same subsystem"
      },
      {
        "key": "B",
        "text": "In different subsystems"
      },
      {
        "key": "C",
        "text": "Ina composite subsystem"
      },
      {
        "key": "D",
        "text": "In layered subsystems"
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"In different subsystems\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"In the same subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: In different subsystems. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Ina composite subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"In layered subsystems\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (18).webp",
    "question": "What is a generalization}specialization hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "A whole/part relationship"
      },
      {
        "key": "B",
        "text": "An inheritance relationship"
      },
      {
        "key": "C",
        "text": "An association between a generalized class and a specialized class"
      },
      {
        "key": "D",
        "text": "A layered hierarchy"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An inheritance relationship\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A whole/part relationship\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An inheritance relationship. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An association between a generalized class and a specialized class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A layered hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (17).webp",
    "question": "What is a primary actor?",
    "options": [
      {
        "key": "A",
        "text": "The actor who goes on stage first"
      },
      {
        "key": "B",
        "text": "The actor that starts the use case"
      },
      {
        "key": "C",
        "text": "An actor that participates in the use case"
      },
      {
        "key": "D",
        "text": "An object inside the system"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The actor that starts the use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The actor who goes on stage first\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The actor that starts the use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An actor that participates in the use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An object inside the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (16).webp",
    "question": "What can an inclusion use case be used for?",
    "options": [
      {
        "key": "A",
        "text": "To describe an inclusive use case"
      },
      {
        "key": "B",
        "text": "To describe a lengthy interaction with an actor"
      },
      {
        "key": "C",
        "text": "To describe a use case that includes other use cases"
      },
      {
        "key": "D",
        "text": "Option D"
      }
    ],
    "answer": "C",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"To describe a use case that includes other use cases\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To describe an inclusive use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"To describe a lengthy interaction with an actor\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: To describe a use case that includes other use cases. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"Option D\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (19).webp",
    "question": "What is meant by the multiplicity of an association?",
    "options": [
      {
        "key": "A",
        "text": "The number of associations in a class"
      },
      {
        "key": "B",
        "text": "The number of associations between buo classes"
      },
      {
        "key": "C",
        "text": "How many instances of one class relate to how many instances of another class"
      },
      {
        "key": "D",
        "text": "How many instances of one class relate to a single instance of another class"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The number of associations between buo classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The number of associations in a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The number of associations between buo classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"How many instances of one class relate to how many instances of another class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"How many instances of one class relate to a single instance of another class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (21).webp",
    "question": "What is a control object?",
    "options": [
      {
        "key": "A",
        "text": "An object that depends on other objects"
      },
      {
        "key": "B",
        "text": "An object that communicates with an external object"
      },
      {
        "key": "C",
        "text": "An object that controls other objects"
      },
      {
        "key": "D",
        "text": "An object that is controlled by other objects"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An object that communicates with an external object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object that depends on other objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An object that communicates with an external object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An object that controls other objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An object that is controlled by other objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (20).webp",
    "question": "What is an entity class?",
    "options": [
      {
        "key": "A",
        "text": "class on an entity/relationship diagram"
      },
      {
        "key": "B",
        "text": "class that stores data"
      },
      {
        "key": "C",
        "text": "class that interfaces to an external entity An external class"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"class that stores data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"class on an entity/relationship diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: class that stores data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"class that interfaces to an external entity An external class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (2).webp",
    "question": "What is a software design strategy?",
    "options": [
      {
        "key": "A",
        "text": "A graphical or textual description of the software."
      },
      {
        "key": "B",
        "text": "A fundamental idea that can be applied to designing a system."
      },
      {
        "key": "C",
        "text": "A systematic approach for producing a design."
      },
      {
        "key": "D",
        "text": "An overall plan and direction for developing a design."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A fundamental idea that can be applied to designing a system.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A graphical or textual description of the software.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A fundamental idea that can be applied to designing a system.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A systematic approach for producing a design.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An overall plan and direction for developing a design.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (11).webp",
    "question": "What is a class?",
    "options": [
      {
        "key": "A",
        "text": "An object instance"
      },
      {
        "key": "B",
        "text": "The implementation of the object"
      },
      {
        "key": "C",
        "text": "A collection of objects with the same characteristics"
      },
      {
        "key": "D",
        "text": "A collection of objects with different characteristics"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The implementation of the object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object instance\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The implementation of the object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A collection of objects with the same characteristics\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A collection of objects with different characteristics\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (10).webp",
    "question": "What is an operation (also known as method) of a class?",
    "options": [
      {
        "key": "A",
        "text": "Specification and the implementation of a function performed by a class"
      },
      {
        "key": "B",
        "text": "Specification and the implementation of a subroutine provided by a class"
      },
      {
        "key": "C",
        "text": "Specification and the implementation of a function or procedure provided by a class"
      },
      {
        "key": "D",
        "text": "Specification and the implementation of an interface provided by a class"
      }
    ],
    "answer": "A",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Specification and the implementation of a function performed by a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Specification and the implementation of a function performed by a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "B": "Sai: \"Specification and the implementation of a subroutine provided by a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Specification and the implementation of a function or procedure provided by a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Specification and the implementation of an interface provided by a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (1).webp",
    "question": "What is a platform-independent model (PIM)?",
    "options": [
      {
        "key": "A",
        "text": "A software platform before a commitment is made to a specific hardware platform."
      },
      {
        "key": "B",
        "text": "A precise model of the software architecture before a commitment is made to a specific platform."
      },
      {
        "key": "C",
        "text": "A precise model of the software architecture mapped to a specific platform."
      },
      {
        "key": "D",
        "text": "A graphical or textual description of the software."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A precise model of the software architecture before a commitment is made to a specific platform.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A software platform before a commitment is made to a specific hardware platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A precise model of the software architecture before a commitment is made to a specific platform.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A precise model of the software architecture mapped to a specific platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A graphical or textual description of the software.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (12).webp",
    "question": "What is carried out during analysis modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing use case models"
      },
      {
        "key": "B",
        "text": "Developing data flow and entityrelationship diagrams"
      },
      {
        "key": "C",
        "text": "Developing static and dynamic models"
      },
      {
        "key": "D",
        "text": "Developing software architectures"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Developing data flow and entityrelationship diagrams\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing use case models\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Developing data flow and entityrelationship diagrams. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Developing static and dynamic models\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Developing software architectures\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (15).webp",
    "question": "What is a secondary actor?",
    "options": [
      {
        "key": "A",
        "text": "The actor who goes on stage second"
      },
      {
        "key": "B",
        "text": "The actor that starts the use case"
      },
      {
        "key": "C",
        "text": "An actor that participates in the use case"
      },
      {
        "key": "D",
        "text": "An object inside the system"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The actor that starts the use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The actor who goes on stage second\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The actor that starts the use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An actor that participates in the use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An object inside the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (14).webp",
    "question": "What is carried out during incremental software construction?",
    "options": [
      {
        "key": "A",
        "text": "Detailed design and coding of the classes in a subset of the system"
      },
      {
        "key": "B",
        "text": "Detailed design, coding, and unit testing of the classes in a subset of the system"
      },
      {
        "key": "C",
        "text": "Coding and unit testing of the classes in a subset of the system"
      },
      {
        "key": "D",
        "text": "unit and integration testing of the classes in a subset of the system"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Detailed design, coding, and unit testing of the classes in a subset of the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Detailed design and coding of the classes in a subset of the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Detailed design, coding, and unit testing of the classes in a subset of the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Coding and unit testing of the classes in a subset of the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"unit and integration testing of the classes in a subset of the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (13).webp",
    "question": "What is carried out during design modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing use case models"
      },
      {
        "key": "B",
        "text": "Developing data flow and entity relationship diagrams"
      },
      {
        "key": "C",
        "text": "Developing static and dynamic models"
      },
      {
        "key": "D",
        "text": "Developing software architectures"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Developing data flow and entity relationship diagrams\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing use case models\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Developing data flow and entity relationship diagrams. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Developing static and dynamic models\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Developing software architectures\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (22).webp",
    "question": "What do class structuring criteria help with?",
    "options": [
      {
        "key": "A",
        "text": "Structuring an application into classes"
      },
      {
        "key": "B",
        "text": "Defining the attributes of a class"
      },
      {
        "key": "C",
        "text": "Defining the associations of a class"
      },
      {
        "key": "D",
        "text": "Defining the operations of a class"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Defining the attributes of a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Structuring an application into classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Defining the attributes of a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Defining the associations of a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Defining the operations of a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (31).webp",
    "question": "How would buo state-dependent control objects communicate with each other?",
    "options": [
      {
        "key": "A",
        "text": "By sending messages to each other"
      },
      {
        "key": "B",
        "text": "By transitioning to the same state"
      },
      {
        "key": "C",
        "text": "Through an entity object"
      },
      {
        "key": "D",
        "text": "Through a proxy object"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"By transitioning to the same state\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"By sending messages to each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: By transitioning to the same state. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Through an entity object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Through a proxy object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (30).webp",
    "question": "Which of the following could happen on an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "A state-dependent control object sends a message to an entity object"
      },
      {
        "key": "B",
        "text": "A state-dependent control object sends a message to a coordinator object"
      },
      {
        "key": "C",
        "text": "A state-dependent control object sends a message to a printer object"
      },
      {
        "key": "D",
        "text": "All of the above"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"All of the above\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A state-dependent control object sends a message to an entity object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"A state-dependent control object sends a message to a coordinator object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"A state-dependent control object sends a message to a printer object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: All of the above. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (3).webp",
    "question": "What is a UML package?",
    "options": [
      {
        "key": "A",
        "text": "A box"
      },
      {
        "key": "B",
        "text": "A grouping of classes"
      },
      {
        "key": "C",
        "text": "A grouping of use cases"
      },
      {
        "key": "D",
        "text": "A grouping of model elements"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A grouping of classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A box\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A grouping of classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A grouping of use cases\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A grouping of model elements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (32).webp",
    "question": "An object can send alternative messages a or b to a state-dependent control object How is this handled in the state machine?",
    "options": [
      {
        "key": "A",
        "text": "One state with a different transition out of it for each incoming message"
      },
      {
        "key": "B",
        "text": "One state for each of the alternative messages"
      },
      {
        "key": "C",
        "text": "A composite state to handle the alternative messages"
      },
      {
        "key": "D",
        "text": "A substate for each alternative message"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"One state for each of the alternative messages\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"One state with a different transition out of it for each incoming message\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: One state for each of the alternative messages. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A composite state to handle the alternative messages\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A substate for each alternative message\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (35).webp",
    "question": "What is a software architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "The structure of the major subsystems of a system"
      },
      {
        "key": "B",
        "text": "The components and connectors in a software architecture"
      },
      {
        "key": "C",
        "text": "A small group of collaborating objects"
      },
      {
        "key": "D",
        "text": "A recurring architecture used in a variety of systems"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The components and connectors in a software architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The structure of the major subsystems of a system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The components and connectors in a software architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A small group of collaborating objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A recurring architecture used in a variety of systems\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (34).webp",
    "question": "What does the software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a building"
      },
      {
        "key": "B",
        "text": "The structure of a Client/Server system"
      },
      {
        "key": "C",
        "text": "The overall structure of a software system"
      },
      {
        "key": "D",
        "text": "The software classes and their relationships"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The structure of a Client/Server system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a building\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The structure of a Client/Server system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The overall structure of a software system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software classes and their relationships\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (33).webp",
    "question": "",
    "options": [
      {
        "key": "A",
        "text": "producer sends a message to a consumer. Which one of the following is synchronous message communication with reply?"
      },
      {
        "key": "B",
        "text": "The producer waits for a response from the consumer."
      },
      {
        "key": "C",
        "text": "The producer does not wait for a response from the consumer."
      },
      {
        "key": "D",
        "text": "The producer goes to sleep D. The producer waits for a timeout"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The producer waits for a response from the consumer.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"producer sends a message to a consumer. Which one of the following is synchronous message communication with reply?\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The producer waits for a response from the consumer.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The producer does not wait for a response from the consumer.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The producer goes to sleep D. The producer waits for a timeout\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (25).webp",
    "question": "What does a communication diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "The sequence of external objects communicating with each other"
      },
      {
        "key": "B",
        "text": "Classes and their relationships"
      },
      {
        "key": "C",
        "text": "Software objects and the sequence of their interactions"
      },
      {
        "key": "D",
        "text": "The external objects communicating with the system"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Classes and their relationships\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The sequence of external objects communicating with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Classes and their relationships. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Software objects and the sequence of their interactions\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The external objects communicating with the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (24).webp",
    "question": "Which of the following interactions is NOT likely to happen on an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "A user interaction object sends a message to an entity object"
      },
      {
        "key": "B",
        "text": "An input object sends a message to a state-dependent control object"
      },
      {
        "key": "C",
        "text": "An input object sends a message to a printer object"
      },
      {
        "key": "D",
        "text": "A user interaction object sends a message to a proxy object"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An input object sends a message to a state-dependent control object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A user interaction object sends a message to an entity object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An input object sends a message to a state-dependent control object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An input object sends a message to a printer object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A user interaction object sends a message to a proxy object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (23).webp",
    "question": "What is a boundary object?",
    "options": [
      {
        "key": "A",
        "text": "An external object"
      },
      {
        "key": "B",
        "text": "An object that stores data"
      },
      {
        "key": "C",
        "text": "An object that communicates with an external object"
      },
      {
        "key": "D",
        "text": "An object that controls other objects"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An object that stores data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An external object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An object that stores data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An object that communicates with an external object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An object that controls other objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (26).webp",
    "question": "What is the generic form of an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "Depicts several objects interacting with each other"
      },
      {
        "key": "B",
        "text": "Depicts one possible sequence of interactions among objects"
      },
      {
        "key": "C",
        "text": "Depicts all possible interactions among objects"
      },
      {
        "key": "D",
        "text": "Depicts all classes and their associations with each other"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Depicts one possible sequence of interactions among objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Depicts several objects interacting with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Depicts one possible sequence of interactions among objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Depicts all possible interactions among objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Depicts all classes and their associations with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (29).webp",
    "question": "What is an event in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "A discrete signal that causes a change of state"
      },
      {
        "key": "B",
        "text": "An input from the external environment"
      },
      {
        "key": "C",
        "text": "An input that is True or False"
      },
      {
        "key": "D",
        "text": "The result of a state transition"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An input from the external environment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A discrete signal that causes a change of state\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An input from the external environment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An input that is True or False\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The result of a state transition\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (28).webp",
    "question": "What is a state transition out of a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition out of only one of the substates"
      },
      {
        "key": "B",
        "text": "A transition out of each of the substates"
      },
      {
        "key": "C",
        "text": "A transition out of none of the substates"
      },
      {
        "key": "D",
        "text": "A transition out of any one of the substates"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A transition out of each of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A transition out of only one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A transition out of each of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A transition out of none of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A transition out of any one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz11/SWD392_-_FA_2024_-_FE_3001 (27).webp",
    "question": "What is a state transition into a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition into only one of the substates"
      },
      {
        "key": "B",
        "text": "A transition into each of the substates"
      },
      {
        "key": "C",
        "text": "A transition into none of the substates"
      },
      {
        "key": "D",
        "text": "A transition into any one of the substates"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A transition into each of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A transition into only one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A transition into each of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A transition into none of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A transition into any one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  }
];
