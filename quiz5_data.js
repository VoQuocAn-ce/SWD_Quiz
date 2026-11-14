/**
 * SWD392 Quiz 5 Data - Architecture Modeling & Design Concepts
 * 60 Questions extracted from Quiz5 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ5_DATA = [
  {
    "id": 1,
    "image": "../Quiz5/Q1.webp",
    "question": "What is a composition hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "A weak form of a generalization/specialization hierarchy"
      },
      {
        "key": "B",
        "text": "A strong form of a generalization/specialization hierarchy"
      },
      {
        "key": "C",
        "text": "A weak form of a whole/part relationship"
      },
      {
        "key": "D",
        "text": "A strong form of a whole/part relationship"
      }
    ],
    "answer": "D",
    "hint": "Quan hệ Composition biểu thị sự gắn kết chặt chẽ giữa tổng thể và bộ phận (vòng đời phụ thuộc).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A strong form of a whole/part relationship\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A weak form of a generalization/specialization hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"A strong form of a generalization/specialization hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"A weak form of a whole/part relationship\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: A strong form of a whole/part relationship. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz5/Q2.webp",
    "question": "What is a unary association in UML?",
    "options": [
      {
        "key": "A",
        "text": "An association between objects of different classes"
      },
      {
        "key": "B",
        "text": "An association between objects of the same class"
      },
      {
        "key": "C",
        "text": "An association between an object and an external system"
      },
      {
        "key": "D",
        "text": "An association that does not involve any objects"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An association between objects of the same class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An association between objects of different classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An association between objects of the same class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An association between an object and an external system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An association that does not involve any objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz5/Q3.webp",
    "question": "In the example \"Employee Works in Department,\" which of the following represents the association? A",
    "options": [
      {
        "key": "A",
        "text": "Employee"
      },
      {
        "key": "B",
        "text": "Department"
      },
      {
        "key": "C",
        "text": "Works in"
      },
      {
        "key": "D",
        "text": "Both Employee and Department"
      }
    ],
    "answer": "C",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Works in\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Employee\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Department\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: Works in. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"Both Employee and Department\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz5/Q4.webp",
    "question": "Which design pattern is frequently applied to handle event notifications in the Emergency Monitoring System?",
    "options": [
      {
        "key": "A",
        "text": "Observer pattern"
      },
      {
        "key": "B",
        "text": "Strategy pattern"
      },
      {
        "key": "C",
        "text": "Factory method pattern"
      },
      {
        "key": "D",
        "text": "_ Decorator pattern"
      }
    ],
    "answer": "A",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Observer pattern\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Observer pattern. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "B": "Sai: \"Strategy pattern\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Factory method pattern\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ Decorator pattern\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz5/Q5.webp",
    "question": "Which system is commonly used as a case study example for illustrating banking transaction processing?",
    "options": [
      {
        "key": "A",
        "text": "Emergency Monitoring System"
      },
      {
        "key": "B",
        "text": "ATM System"
      },
      {
        "key": "C",
        "text": "Online Shopping System"
      },
      {
        "key": "D",
        "text": "Inventory Management System"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"ATM System\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Emergency Monitoring System\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: ATM System. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Online Shopping System\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Inventory Management System\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz5/Q6.webp",
    "question": "What is the role of a service broker in SOA?",
    "options": [
      {
        "key": "A",
        "text": "To host services"
      },
      {
        "key": "B",
        "text": "To find and connect services"
      },
      {
        "key": "C",
        "text": "To provide user interfaces"
      },
      {
        "key": "D",
        "text": "To manage transactions"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To find and connect services\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To host services\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To find and connect services. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To provide user interfaces\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To manage transactions\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz5/Q7.webp",
    "question": "Which case study involves monitoring patient conditions in a healthcare environment?",
    "options": [
      {
        "key": "A",
        "text": "ATM System"
      },
      {
        "key": "B",
        "text": "Online Shopping System"
      },
      {
        "key": "C",
        "text": "Emergency Monitoring System"
      },
      {
        "key": "D",
        "text": "Library Management System"
      }
    ],
    "answer": "A",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"ATM System\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: ATM System. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "B": "Sai: \"Online Shopping System\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Emergency Monitoring System\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Library Management System\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz5/Q8.webp",
    "question": "What is a subsystem in software architecture?",
    "options": [
      {
        "key": "A",
        "text": "A hardware module."
      },
      {
        "key": "B",
        "text": "A single database."
      },
      {
        "key": "C",
        "text": "A logical module grouping related functionality."
      },
      {
        "key": "D",
        "text": "Only the user interface."
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A single database.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A hardware module.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A single database.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A logical module grouping related functionality.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Only the user interface.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz5/Q9.webp",
    "question": "What is the main goal when applying the principle of separation of concerns in subsystem design?",
    "options": [
      {
        "key": "A",
        "text": "To make subsystems more interconnected"
      },
      {
        "key": "B",
        "text": "To assign multiple concerns to each subsystem"
      },
      {
        "key": "C",
        "text": "To ensure each subsystem addresses a distinct concern"
      },
      {
        "key": "D",
        "text": "To combine all subsystems into one aggregate object"
      }
    ],
    "answer": "C",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"To ensure each subsystem addresses a distinct concern\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To make subsystems more interconnected\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"To assign multiple concerns to each subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: To ensure each subsystem addresses a distinct concern. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"To combine all subsystems into one aggregate object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz5/Q10.webp",
    "question": "What is information hiding in software design?",
    "options": [
      {
        "key": "A",
        "text": "Hiding information so that it cannot be found"
      },
      {
        "key": "B",
        "text": "Hiding a design decision that is considered likely to change"
      },
      {
        "key": "C",
        "text": "Hiding information to make it secure"
      },
      {
        "key": "D",
        "text": "Encapsulating data in a class"
      }
    ],
    "answer": "B",
    "hint": "Nguyên lý giấu thông tin của David Parnas: Che giấu những quyết định thiết kế có khả năng biến động trong tương lai.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Hiding a design decision that is considered likely to change\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Hiding information so that it cannot be found\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Hiding a design decision that is considered likely to change. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Hiding information to make it secure\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Encapsulating data in a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz5/Q11.webp",
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
    "id": 12,
    "image": "../Quiz5/Q12.webp",
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
    "id": 13,
    "image": "../Quiz5/Q13.webp",
    "question": "What is a condition used for in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "conditional action"
      },
      {
        "key": "B",
        "text": "conditional state"
      },
      {
        "key": "C",
        "text": "conditional state transition"
      },
      {
        "key": "D",
        "text": "conditional event"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"conditional state\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"conditional action\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: conditional state. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"conditional state transition\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"conditional event\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz5/Q14.webp",
    "question": "Which UML diagram is primarily used for modeling relationships between classes and interfaces?",
    "options": [
      {
        "key": "A",
        "text": "Statechart Diagram"
      },
      {
        "key": "B",
        "text": "Class Diagram"
      },
      {
        "key": "C",
        "text": "Activity Diagram"
      },
      {
        "key": "D",
        "text": "Deployment Diagram"
      }
    ],
    "answer": "D",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Deployment Diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Statechart Diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Class Diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Activity Diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Deployment Diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz5/Q15.webp",
    "question": "If actions are shown on a given state transition, which of the following is true?",
    "options": [
      {
        "key": "A",
        "text": "The buo actions are dependent on each other."
      },
      {
        "key": "B",
        "text": "The buo actions are independent of each other."
      },
      {
        "key": "C",
        "text": "One action provides an input to the other action."
      },
      {
        "key": "D",
        "text": "The second action executes when the first action completes execution."
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The buo actions are independent of each other.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The buo actions are dependent on each other.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The buo actions are independent of each other.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"One action provides an input to the other action.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The second action executes when the first action completes execution.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz5/Q16.webp",
    "question": "What is the main difference between a class and an interface?",
    "options": [
      {
        "key": "A",
        "text": "class can contain implementations of methods, while an interface cannot An interface can be instantiated, while a class cannot"
      },
      {
        "key": "B",
        "text": "class cannot be extended, while an interface can"
      },
      {
        "key": "C",
        "text": "class only contains method declarations, while an interface contains method implementations"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"class cannot be extended, while an interface can\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"class can contain implementations of methods, while an interface cannot An interface can be instantiated, while a class cannot\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: class cannot be extended, while an interface can. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"class only contains method declarations, while an interface contains method implementations\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz5/Q17.webp",
    "question": "Which of the following is not included in the main object and class structuring categories?",
    "options": [
      {
        "key": "A",
        "text": "Entity object"
      },
      {
        "key": "B",
        "text": "Boundary object"
      },
      {
        "key": "C",
        "text": "Control object"
      },
      {
        "key": "D",
        "text": "user object"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"user object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Entity object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Boundary object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Control object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: user object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz5/Q18.webp",
    "question": "Which one of the following is NOT a concept associated with object-oriented programming?",
    "options": [
      {
        "key": "A",
        "text": "Encapsulation"
      },
      {
        "key": "B",
        "text": "B. Class"
      },
      {
        "key": "C",
        "text": "Subclass"
      },
      {
        "key": "D",
        "text": "Subroutine"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Subroutine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Encapsulation\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"B. Class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Subclass\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Subroutine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz5/Q19.webp",
    "question": "In COMET, what is the first step in the software development process? A",
    "options": [
      {
        "key": "A",
        "text": "Requirements modeling"
      },
      {
        "key": "B",
        "text": "Incremental software construction"
      },
      {
        "key": "C",
        "text": "Design modeling"
      },
      {
        "key": "D",
        "text": "System testing"
      }
    ],
    "answer": "A",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Requirements modeling\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Requirements modeling. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "B": "Sai: \"Incremental software construction\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Design modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"System testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz5/Q20.webp",
    "question": "Which of the following best describes the role of software quality atü-ibutes in architectural design?",
    "options": [
      {
        "key": "A",
        "text": "They provide guidelines for programming language syntax"
      },
      {
        "key": "B",
        "text": "They represent non-functional requirements that influence architectural choices"
      },
      {
        "key": "C",
        "text": "They describe database constraints only"
      },
      {
        "key": "D",
        "text": "They replace functional requirements"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"They represent non-functional requirements that influence architectural choices\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"They provide guidelines for programming language syntax\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: They represent non-functional requirements that influence architectural choices. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"They describe database constraints only\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"They replace functional requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz5/Q21.webp",
    "question": "Which architectural style is most suitable when system modules must be highly reusable and independently deployable?",
    "options": [
      {
        "key": "A",
        "text": "Monolithic"
      },
      {
        "key": "B",
        "text": "Service-Oriented Architecture (SOA)"
      },
      {
        "key": "C",
        "text": "_ Layered"
      },
      {
        "key": "D",
        "text": "_ Repository"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Service-Oriented Architecture (SOA)\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Monolithic\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Service-Oriented Architecture (SOA). Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"_ Layered\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ Repository\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz5/Q22.webp",
    "question": "An output message from a state dependent control object corresponds to:",
    "options": [
      {
        "key": "A",
        "text": "An event on the internal state machine"
      },
      {
        "key": "B",
        "text": "An action on the internal state machine"
      },
      {
        "key": "C",
        "text": "A condition on the internal state machine"
      },
      {
        "key": "D",
        "text": "A state on the internal state machine"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An action on the internal state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An event on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An action on the internal state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A condition on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A state on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz5/Q23.webp",
    "question": "When applying the Observer design pattern, which role is responsible for notifying all dependent objects about",
    "options": [
      {
        "key": "A",
        "text": "state change?"
      },
      {
        "key": "B",
        "text": "Observer"
      },
      {
        "key": "C",
        "text": "Subject"
      },
      {
        "key": "D",
        "text": "Mediator D. Adapter"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Observer\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"state change?\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Observer. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Subject\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Mediator D. Adapter\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz5/Q24.webp",
    "question": "An input message to a state-dependent control object corresponds to:",
    "options": [
      {
        "key": "A",
        "text": "An event on the internal state machine"
      },
      {
        "key": "B",
        "text": "An action on the internal state machine"
      },
      {
        "key": "C",
        "text": "A condition on the internal state machine"
      },
      {
        "key": "D",
        "text": "A state on the internal state machine"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An action on the internal state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An event on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An action on the internal state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A condition on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A state on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz5/Q25.webp",
    "question": "What is the primary goal of Software Product Line Engineering?",
    "options": [
      {
        "key": "A",
        "text": "To develop a single software product that fits all market needs"
      },
      {
        "key": "B",
        "text": "To decrease software production costs by reducing the quality"
      },
      {
        "key": "C",
        "text": "To focus exclusively on the customization of software for individual customers"
      },
      {
        "key": "D",
        "text": "To create a set of software products sharing a common, managed set of features to satisfy specific market segments"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To decrease software production costs by reducing the quality\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To develop a single software product that fits all market needs\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To decrease software production costs by reducing the quality. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To focus exclusively on the customization of software for individual customers\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To create a set of software products sharing a common, managed set of features to satisfy specific market segments\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz5/Q26.webp",
    "question": "In the context of software product lines, what is 'Feature Modeling'?",
    "options": [
      {
        "key": "A",
        "text": "A technique for documenting software performance metrics"
      },
      {
        "key": "B",
        "text": "A process for creating graphical user interfaces for software products"
      },
      {
        "key": "C",
        "text": "A method for identifying and organizing the features common and variable across the product line"
      },
      {
        "key": "D",
        "text": "A strategy for reducing the number of features in software to minimize costs"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A process for creating graphical user interfaces for software products\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A technique for documenting software performance metrics\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A process for creating graphical user interfaces for software products. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A method for identifying and organizing the features common and variable across the product line\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A strategy for reducing the number of features in software to minimize costs\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz5/Q27.webp",
    "question": "What is an optional use case?",
    "options": [
      {
        "key": "A",
        "text": "A use case with some optional steps"
      },
      {
        "key": "B",
        "text": "A use case that does not need to be developed"
      },
      {
        "key": "C",
        "text": "A use case that is required by some product line members but not others"
      },
      {
        "key": "D",
        "text": "A use case that can be chosen in place ofa different use case in a SPL member"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A use case that does not need to be developed\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A use case with some optional steps\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A use case that does not need to be developed. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A use case that is required by some product line members but not others\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A use case that can be chosen in place ofa different use case in a SPL member\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz5/Q28.webp",
    "question": "What are the Fuo kinds of UML interaction diagrams?",
    "options": [
      {
        "key": "A",
        "text": "Class diagram and sequence diagram"
      },
      {
        "key": "B",
        "text": "Sequence diagram and communication diagram"
      },
      {
        "key": "C",
        "text": "Class diagram and communication diagram"
      },
      {
        "key": "D",
        "text": "Statechart and communication diagram"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Sequence diagram and communication diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Class diagram and sequence diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Sequence diagram and communication diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Class diagram and communication diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Statechart and communication diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz5/Q29.webp",
    "question": "How is an association depicted on a class diagram?",
    "options": [
      {
        "key": "A",
        "text": "A solid line joining class boxes"
      },
      {
        "key": "B",
        "text": "A dashed line joining buo class boxes"
      },
      {
        "key": "C",
        "text": "A diamond touching the upper class box"
      },
      {
        "key": "D",
        "text": "An arrowhead touching the upper class box"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A dashed line joining buo class boxes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A solid line joining class boxes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A dashed line joining buo class boxes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A diamond touching the upper class box\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An arrowhead touching the upper class box\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz5/Q30.webp",
    "question": "What is the primary purpose of a use case diagram in UML?",
    "options": [
      {
        "key": "A",
        "text": "To show the interactions between classes in a system"
      },
      {
        "key": "B",
        "text": "To represent the dynamic behavior of a system"
      },
      {
        "key": "C",
        "text": "To illustrate the organization of objects within a class"
      },
      {
        "key": "D",
        "text": "To depict the high-level functionality of a system"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To represent the dynamic behavior of a system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To show the interactions between classes in a system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To represent the dynamic behavior of a system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To illustrate the organization of objects within a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To depict the high-level functionality of a system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz5/Q31.webp",
    "question": "Which of the following system problems does availability address?",
    "options": [
      {
        "key": "A",
        "text": "Denial of service"
      },
      {
        "key": "B",
        "text": "Single point of failure"
      },
      {
        "key": "C",
        "text": "System throughput"
      },
      {
        "key": "D",
        "text": "_ System penetration"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Single point of failure\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Denial of service\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Single point of failure. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"System throughput\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ System penetration\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz5/Q32.webp",
    "question": "Which of the following is a common bottleneck that impacts scalability in traditional web applications?",
    "options": [
      {
        "key": "A",
        "text": "The web server layer."
      },
      {
        "key": "B",
        "text": "The application server layer."
      },
      {
        "key": "C",
        "text": "The database server layer."
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
        "A": "Sai: \"The web server layer.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"The application server layer.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"The database server layer.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: All of the above. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz5/Q33.webp",
    "question": "In COMET-based system design, how is the quality attribute of testability primarily supported? A",
    "options": [
      {
        "key": "A",
        "text": "By tightly coupling modules for faster access"
      },
      {
        "key": "B",
        "text": "By structuring the system with clearly defined interfaces and decoupled components"
      },
      {
        "key": "C",
        "text": "By embedding test code into production logic"
      },
      {
        "key": "D",
        "text": "By minimizing documentation and focusing on rapid prototyping"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"By structuring the system with clearly defined interfaces and decoupled components\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"By tightly coupling modules for faster access\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: By structuring the system with clearly defined interfaces and decoupled components. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"By embedding test code into production logic\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"By minimizing documentation and focusing on rapid prototyping\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz5/Q34.webp",
    "question": "What is the main purpose of using use Case Modeling in system development? A",
    "options": [
      {
        "key": "A",
        "text": "Identifying the interactions between users and the system"
      },
      {
        "key": "B",
        "text": "Developing algorithms for data storage"
      },
      {
        "key": "C",
        "text": "Automating performance testing"
      },
      {
        "key": "D",
        "text": "Establishing network protocols"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Developing algorithms for data storage\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Identifying the interactions between users and the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Developing algorithms for data storage. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Automating performance testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Establishing network protocols\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz5/Q35.webp",
    "question": "When modeling alternate pathways, when should one apply the extend relationship?",
    "options": [
      {
        "key": "A",
        "text": "when a single, intricate interaction sequence requires the participation of numerous performers."
      },
      {
        "key": "B",
        "text": "when a single use case contains an excessive number of alternate, optional, or extraordinary interaction sequences"
      },
      {
        "key": "C",
        "text": "when numerous existing use cases exhibit shared functionality that may be taken and used again."
      },
      {
        "key": "D",
        "text": "Sometimes it is necessary to group relevant use cases in a use case package to improve organization."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"when a single use case contains an excessive number of alternate, optional, or extraordinary interaction sequences\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"when a single, intricate interaction sequence requires the participation of numerous performers.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: when a single use case contains an excessive number of alternate, optional, or extraordinary interaction sequences. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"when numerous existing use cases exhibit shared functionality that may be taken and used again.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Sometimes it is necessary to group relevant use cases in a use case package to improve organization.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz5/Q36.webp",
    "question": "Which method can be applied to define a system's functional requirements?",
    "options": [
      {
        "key": "A",
        "text": "use case modeling"
      },
      {
        "key": "B",
        "text": "Requirements analysis"
      },
      {
        "key": "C",
        "text": "Static modeling"
      },
      {
        "key": "D",
        "text": "Activity diagrams"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Requirements analysis\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"use case modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Requirements analysis. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Static modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Activity diagrams\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz5/Q37.webp",
    "question": "When evolving a complex software system, which strategy minimizes risks during the introduction of major design changes?",
    "options": [
      {
        "key": "A",
        "text": "Immediate deployment to production"
      },
      {
        "key": "B",
        "text": "Parallel model refinement and incremental integration"
      },
      {
        "key": "C",
        "text": "Isolated team development without integration"
      },
      {
        "key": "D",
        "text": "Skipping design documentation updates"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Parallel model refinement and incremental integration\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Immediate deployment to production\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Parallel model refinement and incremental integration. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Isolated team development without integration\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Skipping design documentation updates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz5/Q38.webp",
    "question": "How the discriminator represented in the relational database mapping from the generalization/specialization hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "As a primary key in the superclass table."
      },
      {
        "key": "B",
        "text": "As an attribute in each subclass table."
      },
      {
        "key": "C",
        "text": "As part of the concatenated primary key in each subclass table."
      },
      {
        "key": "D",
        "text": "As an explicit attribute of the superclass table."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"As an attribute in each subclass table.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"As a primary key in the superclass table.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: As an attribute in each subclass table.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"As part of the concatenated primary key in each subclass table.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"As an explicit attribute of the superclass table.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz5/Q39.webp",
    "question": "Which stereotype represents a class that encapsulates data and may sewe as an interface to a database?",
    "options": [
      {
        "key": "A",
        "text": "Boundary class"
      },
      {
        "key": "B",
        "text": "Entity class"
      },
      {
        "key": "C",
        "text": "Control class"
      },
      {
        "key": "D",
        "text": "Application logic class"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Entity class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Boundary class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Entity class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Control class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Application logic class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz5/Q40.webp",
    "question": "In class diagram, optional relationship is:",
    "options": [
      {
        "key": "A",
        "text": "1..*"
      },
      {
        "key": "B",
        "text": "m..n"
      },
      {
        "key": "C",
        "text": "*"
      },
      {
        "key": "D",
        "text": "0..1"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"0..1\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"1..*\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"m..n\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"*\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: 0..1. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz5/Q41.webp",
    "question": "What approach does the spiral model emphasize?",
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
    "id": 42,
    "image": "../Quiz5/Q42.webp",
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
    "id": 43,
    "image": "../Quiz5/Q43.webp",
    "question": "Which of the following best describes group communication in distributed applications?",
    "options": [
      {
        "key": "A",
        "text": "A form of one-to-one communication where messages are sent directly between buo components only."
      },
      {
        "key": "B",
        "text": "A method where a sender transmits the same message to multiple recipients using broadcast or multicast mechanisms _"
      },
      {
        "key": "C",
        "text": "A technique for encrypting messages before sending them across different nodes."
      },
      {
        "key": "D",
        "text": "A communication pattern where all components in a system send messages to a single central controller"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A method where a sender transmits the same message to multiple recipients using broadcast or multicast mechanisms _\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A form of one-to-one communication where messages are sent directly between buo components only.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A method where a sender transmits the same message to multiple recipients using broadcast or multicast mechanisms _. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A technique for encrypting messages before sending them across different nodes.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A communication pattern where all components in a system send messages to a single central controller\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz5/Q44.webp",
    "question": "How does Copilot assist during software design?",
    "options": [
      {
        "key": "A",
        "text": "By compiling code"
      },
      {
        "key": "B",
        "text": "By providing code suggestions and generating design structures"
      },
      {
        "key": "C",
        "text": "By executing database queries"
      },
      {
        "key": "D",
        "text": "By configuring deployment pipelines"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"By providing code suggestions and generating design structures\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"By compiling code\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: By providing code suggestions and generating design structures. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"By executing database queries\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"By configuring deployment pipelines\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz5/Q45.webp",
    "question": "What does a component's required interface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The operations that a component must fulfill"
      },
      {
        "key": "B",
        "text": "The operations inside a component"
      },
      {
        "key": "C",
        "text": "The operations that a component uses"
      },
      {
        "key": "D",
        "text": "The visible operations of a component"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The operations inside a component\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The operations that a component must fulfill\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The operations inside a component. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The operations that a component uses\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The visible operations of a component\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz5/Q46.webp",
    "question": "How is a concurrent service designed?",
    "options": [
      {
        "key": "A",
        "text": "One object that responds to requests from clients"
      },
      {
        "key": "B",
        "text": "Multiple objects that respond to requests from clients"
      },
      {
        "key": "C",
        "text": "One subsystem that responds to requests from clients"
      },
      {
        "key": "D",
        "text": "Multiple subsystems that respond to requests from clients"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Multiple objects that respond to requests from clients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"One object that responds to requests from clients\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Multiple objects that respond to requests from clients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"One subsystem that responds to requests from clients\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Multiple subsystems that respond to requests from clients\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz5/Q47.webp",
    "question": "What constitutes a Client/Server software architecture's fundamental structure?",
    "options": [
      {
        "key": "A",
        "text": "One client and multiple services"
      },
      {
        "key": "B",
        "text": "Multiple clients and one service"
      },
      {
        "key": "C",
        "text": "Multiple clients and multiple services"
      },
      {
        "key": "D",
        "text": "One client and one service"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Multiple clients and one service\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"One client and multiple services\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Multiple clients and one service. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Multiple clients and multiple services\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"One client and one service\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz5/Q48.webp",
    "question": "Which database constraint enforces uniqueness of each record?",
    "options": [
      {
        "key": "A",
        "text": "Foreign key"
      },
      {
        "key": "B",
        "text": "Primary key"
      },
      {
        "key": "C",
        "text": "C. Index"
      },
      {
        "key": "D",
        "text": "Trigger"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Primary key\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Foreign key\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Primary key. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"C. Index\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Trigger\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz5/Q49.webp",
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
    "id": 50,
    "image": "../Quiz5/Q50.webp",
    "question": "What is a user interaction task?",
    "options": [
      {
        "key": "A",
        "text": "task that interacts with 1/0 devices"
      },
      {
        "key": "B",
        "text": "task that interacts with users"
      },
      {
        "key": "C",
        "text": "task that interacts with a user sequentially"
      },
      {
        "key": "D",
        "text": "task that interacts with a user concurrently"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"task that interacts with users\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"task that interacts with 1/0 devices\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: task that interacts with users. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"task that interacts with a user sequentially\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"task that interacts with a user concurrently\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz5/Q51.webp",
    "question": "Which of the following is true for a Centralized Control architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "Control is divided among various control components _"
      },
      {
        "key": "B",
        "text": "It provides the overall control and sequencing of the system."
      },
      {
        "key": "C",
        "text": "It provides overall control by coordinating several control components _"
      },
      {
        "key": "D",
        "text": "It provides overall control over various 1/0 objects."
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It provides the overall control and sequencing of the system.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control is divided among various control components _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: It provides the overall control and sequencing of the system.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"It provides overall control by coordinating several control components _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"It provides overall control over various 1/0 objects.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz5/Q52.webp",
    "question": "What is a dynamic view of a software architecture?",
    "options": [
      {
        "key": "A",
        "text": "A view in terms ofa module hierarchy"
      },
      {
        "key": "B",
        "text": "A view in terms of components and connectors"
      },
      {
        "key": "C",
        "text": "A view of the physical configuration in terms of nodes and interconnections"
      },
      {
        "key": "D",
        "text": "A view in terms of objects and messages"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A view in terms of components and connectors\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A view in terms ofa module hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A view in terms of components and connectors. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A view of the physical configuration in terms of nodes and interconnections\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A view in terms of objects and messages\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz5/Q53.webp",
    "question": "What ensures consistency between a communication diagram and a statechart when modeling state-dependent interaction scenarios?",
    "options": [
      {
        "key": "A",
        "text": "using different naming conventions for events and messages."
      },
      {
        "key": "B",
        "text": "Assigning unique names to each state in the statechart"
      },
      {
        "key": "C",
        "text": "Numbering messages and events in the same sequence across both diagrams."
      },
      {
        "key": "D",
        "text": "Defining separate control objects for each diagram."
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Assigning unique names to each state in the statechart\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"using different naming conventions for events and messages.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Assigning unique names to each state in the statechart. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Numbering messages and events in the same sequence across both diagrams.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Defining separate control objects for each diagram.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz5/Q54.webp",
    "question": "What is a structural view of a software architecture?",
    "options": [
      {
        "key": "A",
        "text": "A view in terms ofa module hierarchy"
      },
      {
        "key": "B",
        "text": "A view in terms of components and connectors"
      },
      {
        "key": "C",
        "text": "A view of the physical configuration in terms of nodes and interconnections"
      },
      {
        "key": "D",
        "text": "A view in terms of objects and messages"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A view in terms of components and connectors\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A view in terms ofa module hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A view in terms of components and connectors. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A view of the physical configuration in terms of nodes and interconnections\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A view in terms of objects and messages\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz5/Q55.webp",
    "question": "Which UML diagram is typically used to show the dynamic behavior of a system, including the sequence of interactions between objects or components?",
    "options": [
      {
        "key": "A",
        "text": "Class diagram"
      },
      {
        "key": "B",
        "text": "use case diagram"
      },
      {
        "key": "C",
        "text": "Sequence diagram"
      },
      {
        "key": "D",
        "text": "State diagram"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"use case diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Class diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: use case diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Sequence diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"State diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz5/Q56.webp",
    "question": "What are software structuring criteria?",
    "options": [
      {
        "key": "A",
        "text": "Fundamental ideas that can be applied to designing a system."
      },
      {
        "key": "B",
        "text": "Systematic approaches for producing a design."
      },
      {
        "key": "C",
        "text": "Guidelines used to help in structuring a software system into its components."
      },
      {
        "key": "D",
        "text": "Overall plans for developing a design."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Systematic approaches for producing a design.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Fundamental ideas that can be applied to designing a system.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Systematic approaches for producing a design.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Guidelines used to help in structuring a software system into its components.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Overall plans for developing a design.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz5/Q57.webp",
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
    "id": 58,
    "image": "../Quiz5/Q58.webp",
    "question": "What is the primary goal of dynamic interaction modeling?",
    "options": [
      {
        "key": "A",
        "text": "To illustrate runtime behavior and communication between components"
      },
      {
        "key": "B",
        "text": "To automate testing processes"
      },
      {
        "key": "C",
        "text": "To centralize system deployment"
      },
      {
        "key": "D",
        "text": "To simplify' static modeling"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To automate testing processes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To illustrate runtime behavior and communication between components\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To automate testing processes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To centralize system deployment\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To simplify' static modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz5/Q59.webp",
    "question": "What kind of relationship between tables typically requires a foreign key in relational database design?",
    "options": [
      {
        "key": "A",
        "text": "O ne-to-one"
      },
      {
        "key": "B",
        "text": "One-to-many"
      },
      {
        "key": "C",
        "text": "Many-to-many"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"One-to-many\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"O ne-to-one\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: One-to-many. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Many-to-many\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz5/Q60.webp",
    "question": "What kind of object would be the first object to receive an input from an external object0",
    "options": [
      {
        "key": "A",
        "text": "A user interaction object"
      },
      {
        "key": "B",
        "text": "A proxy object"
      },
      {
        "key": "C",
        "text": "An entity object"
      },
      {
        "key": "D",
        "text": "A boundary object"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A proxy object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A user interaction object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A proxy object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An entity object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A boundary object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  }
];
