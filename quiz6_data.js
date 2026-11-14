/**
 * SWD392 Quiz 6 Data - Structural & Behavioral Modeling
 * 60 Questions extracted from Quiz6 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ6_DATA = [
  {
    "id": 1,
    "image": "../Quiz6/Q1 (1).webp",
    "question": "What is a platform-specific model (PSM)?",
    "options": [
      {
        "key": "A",
        "text": "A specific hardware platform."
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
    "answer": "C",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A precise model of the software architecture mapped to a specific platform.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A specific hardware platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"A precise model of the software architecture before a commitment is made to a specific platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: A precise model of the software architecture mapped to a specific platform.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"A graphical or textual description of the software.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz6/Q2.webp",
    "question": "What is the primary purpose of modeling in software development?",
    "options": [
      {
        "key": "A",
        "text": "Writing code"
      },
      {
        "key": "B",
        "text": "Marketing software"
      },
      {
        "key": "C",
        "text": "Simulating hardware"
      },
      {
        "key": "D",
        "text": "Designing applications before coding"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Marketing software\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Writing code\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Marketing software. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Simulating hardware\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Designing applications before coding\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz6/Q3.webp",
    "question": "During the analysis phase, which of the following diagrams is most commonly used to model functional requirements?",
    "options": [
      {
        "key": "A",
        "text": "Class diagram"
      },
      {
        "key": "B",
        "text": "use Case diagram"
      },
      {
        "key": "C",
        "text": "Deployment diagram"
      },
      {
        "key": "D",
        "text": "Statechart diagram"
      }
    ],
    "answer": "C",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Deployment diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Class diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"use Case diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: Deployment diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"Statechart diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz6/Q4.webp",
    "question": "Which UML diagram is essential for modeling system deployment on hardware nodes?",
    "options": [
      {
        "key": "A",
        "text": "Deployment Diagram"
      },
      {
        "key": "B",
        "text": "Sequence Diagram"
      },
      {
        "key": "C",
        "text": "Class Diagram"
      },
      {
        "key": "D",
        "text": "Activity Diagram"
      }
    ],
    "answer": "A",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Deployment Diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Deployment Diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "B": "Sai: \"Sequence Diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Class Diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Activity Diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz6/Q5.webp",
    "question": "In UML, what symbol represents an actor in a use case diagram?",
    "options": [
      {
        "key": "A",
        "text": "Ellipse"
      },
      {
        "key": "B",
        "text": "Square"
      },
      {
        "key": "C",
        "text": "Stick figure"
      },
      {
        "key": "D",
        "text": "Diamond"
      }
    ],
    "answer": "C",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Stick figure\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Ellipse\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Square\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: Stick figure. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"Diamond\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz6/Q6.webp",
    "question": "Which of the following is NOT typically captured in a use case description?",
    "options": [
      {
        "key": "A",
        "text": "Preconditions"
      },
      {
        "key": "B",
        "text": "Flow of events"
      },
      {
        "key": "C",
        "text": "Postconditions"
      },
      {
        "key": "D",
        "text": "Source code"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Source code\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Preconditions\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Flow of events\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Postconditions\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Source code. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz6/Q7.webp",
    "question": "What is the goal of software validation?",
    "options": [
      {
        "key": "A",
        "text": "Building the system"
      },
      {
        "key": "B",
        "text": "Building the right system"
      },
      {
        "key": "C",
        "text": "Building the system right"
      },
      {
        "key": "D",
        "text": "Testing the system"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Building the right system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Building the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Building the right system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Building the system right\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Testing the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz6/Q8.webp",
    "question": "What is \"black box\" testing?",
    "options": [
      {
        "key": "A",
        "text": "System testing"
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
    "answer": "D",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Testing without knowledge of the software internals\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"System testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Integration testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Testing with knowledge of the system internals\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Testing without knowledge of the software internals. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz6/Q9.webp",
    "question": "Question: g What does the Waterfall model emphasize?",
    "options": [
      {
        "key": "A",
        "text": "Iterative development"
      },
      {
        "key": "B",
        "text": "Parallel testing"
      },
      {
        "key": "C",
        "text": "Sequential execution of phases"
      },
      {
        "key": "D",
        "text": "Rapid delivery of software"
      }
    ],
    "answer": "C",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Sequential execution of phases\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Iterative development\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Parallel testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: Sequential execution of phases. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"Rapid delivery of software\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz6/Q10.webp",
    "question": "Question: IO How does information hiding relate to the concept of encapsulation in software engineering?",
    "options": [
      {
        "key": "A",
        "text": "Information hiding is a different term for the same concept as encapsulation."
      },
      {
        "key": "B",
        "text": "Information hiding is a subset of encapsulation, focusing on hiding internal details."
      },
      {
        "key": "C",
        "text": "Encapsulation is a subset of information hiding, emphasizing data security."
      },
      {
        "key": "D",
        "text": "Information hiding and encapsulation are unrelated concepts in software design."
      }
    ],
    "answer": "B",
    "hint": "Nguyên lý giấu thông tin của David Parnas: Che giấu những quyết định thiết kế có khả năng biến động trong tương lai.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Information hiding is a subset of encapsulation, focusing on hiding internal details.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Information hiding is a different term for the same concept as encapsulation.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Information hiding is a subset of encapsulation, focusing on hiding internal details.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Encapsulation is a subset of information hiding, emphasizing data security.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Information hiding and encapsulation are unrelated concepts in software design.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz6/Q11.webp",
    "question": "Which principle helps in reducing complexity during system design?",
    "options": [
      {
        "key": "A",
        "text": "Tight coupling"
      },
      {
        "key": "B",
        "text": "Modularization"
      },
      {
        "key": "C",
        "text": "Code duplication"
      },
      {
        "key": "D",
        "text": "Hardcoding values"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Modularization\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Tight coupling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Modularization. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Code duplication\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Hardcoding values\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz6/Q12.webp",
    "question": "What is software modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing models of software, include Structural Modeling, Behavioral Modeling, Architectural Modeling"
      },
      {
        "key": "B",
        "text": "Designing software applications before coding, include Structural Modeling, Behavioral Modeling, Architectural Modeling, use Case Modeling"
      },
      {
        "key": "C",
        "text": "Developing software diagrams, include, Architectural Modeling, Use Case Modeling"
      },
      {
        "key": "D",
        "text": "Developing software prototypes, include Structural Modeling, Behavioral Modeling, Architectural Modeling"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Designing software applications before coding, include Structural Modeling, Behavioral Modeling, Architectural Modeling, use Case Modeling\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing models of software, include Structural Modeling, Behavioral Modeling, Architectural Modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Designing software applications before coding, include Structural Modeling, Behavioral Modeling, Architectural Modeling, use Case Modeling. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Developing software diagrams, include, Architectural Modeling, Use Case Modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Developing software prototypes, include Structural Modeling, Behavioral Modeling, Architectural Modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz6/Q13.webp",
    "question": "Which of the following architectural styles organizes the system into presentation, business logic, and data layers?",
    "options": [
      {
        "key": "A",
        "text": "Client-Server"
      },
      {
        "key": "B",
        "text": "Layered Architecture"
      },
      {
        "key": "C",
        "text": "Service-Oriented Architecture"
      },
      {
        "key": "D",
        "text": "Repository"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Layered Architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Client-Server\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Layered Architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Service-Oriented Architecture\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Repository\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz6/Q14.webp",
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
    "id": 15,
    "image": "../Quiz6/Q15.webp",
    "question": "What is the main focus of the COMET software life cycle?",
    "options": [
      {
        "key": "A",
        "text": "Implementing code without modeling"
      },
      {
        "key": "B",
        "text": "using UML diagrams for software maintenance only"
      },
      {
        "key": "C",
        "text": "Focusing exclusively on post-deployment activities"
      },
      {
        "key": "D",
        "text": "Integrating software modeling and design from requirements to architecture"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Integrating software modeling and design from requirements to architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Implementing code without modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"using UML diagrams for software maintenance only\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Focusing exclusively on post-deployment activities\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Integrating software modeling and design from requirements to architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz6/Q16.webp",
    "question": "What is a use case?",
    "options": [
      {
        "key": "A",
        "text": "A case study involving users"
      },
      {
        "key": "B",
        "text": "A sequence of interactions between the user and the system"
      },
      {
        "key": "C",
        "text": "A sequence of interactions between the user and the objects in the system"
      },
      {
        "key": "D",
        "text": "A sequence of user inputs to the system"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A sequence of interactions between the user and the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A case study involving users\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A sequence of interactions between the user and the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A sequence of interactions between the user and the objects in the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A sequence of user inputs to the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz6/Q17.webp",
    "question": "Which element represents user interaction scenarios in software modeling?",
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
        "text": "Component diagram"
      },
      {
        "key": "D",
        "text": "Statechart diagram"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"use case diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Class diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: use case diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Component diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Statechart diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz6/Q18.webp",
    "question": "What is described using a use case model?",
    "options": [
      {
        "key": "A",
        "text": "Object layout"
      },
      {
        "key": "B",
        "text": "Functional behavior of the system"
      },
      {
        "key": "C",
        "text": "Database structure"
      },
      {
        "key": "D",
        "text": "Component dependencies"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Functional behavior of the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Object layout\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Functional behavior of the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Database structure\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Component dependencies\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz6/Q19.webp",
    "question": "What is the primary focus of static modeling in software design?",
    "options": [
      {
        "key": "A",
        "text": "Representing the dynamic behavior of a system"
      },
      {
        "key": "B",
        "text": "Modeling the structure and relationships between system components"
      },
      {
        "key": "C",
        "text": "Managing software project timelines and budgets"
      },
      {
        "key": "D",
        "text": "Testing and debugging software code"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Modeling the structure and relationships between system components\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Representing the dynamic behavior of a system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Modeling the structure and relationships between system components. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Managing software project timelines and budgets\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Testing and debugging software code\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz6/Q20.webp",
    "question": "Why is it important to document a design pattern's Consequences in the GoF template?",
    "options": [
      {
        "key": "A",
        "text": "To list UML symbols used"
      },
      {
        "key": "B",
        "text": "To describe trade-offs, impact on flexibility, reusability, and potential liabilities of using the pattern"
      },
      {
        "key": "C",
        "text": "To replace the need for code implementation"
      },
      {
        "key": "D",
        "text": "To ensure automatic generation of test cases"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To describe trade-offs, impact on flexibility, reusability, and potential liabilities of using the pattern\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To list UML symbols used\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To describe trade-offs, impact on flexibility, reusability, and potential liabilities of using the pattern. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To replace the need for code implementation\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To ensure automatic generation of test cases\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz6/Q21.webp",
    "question": "What is a generalization/specialization hierarchy?",
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
    "id": 22,
    "image": "../Quiz6/Q22.webp",
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
    "id": 23,
    "image": "../Quiz6/Q23.webp",
    "question": "What is an entity object in software design?",
    "options": [
      {
        "key": "A",
        "text": "An object that performs actions and operations"
      },
      {
        "key": "B",
        "text": "An object that stores information and provides limited access to that data"
      },
      {
        "key": "C",
        "text": "An object that interacts with other objects in real-time"
      },
      {
        "key": "D",
        "text": "An object that controls the flow of the system's processes"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An object that stores information and provides limited access to that data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object that performs actions and operations\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An object that stores information and provides limited access to that data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An object that interacts with other objects in real-time\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An object that controls the flow of the system's processes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz6/Q24.webp",
    "question": "Which of the following categories does NOT typically belong to Object and Class Structuring?",
    "options": [
      {
        "key": "A",
        "text": "Boundary Classes"
      },
      {
        "key": "B",
        "text": "Entity Classes"
      },
      {
        "key": "C",
        "text": "Control Classes"
      },
      {
        "key": "D",
        "text": "Database Classes"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Entity Classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Boundary Classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Entity Classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Control Classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Database Classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz6/Q25.webp",
    "question": "What does a sequence diagram depict?",
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
    "id": 26,
    "image": "../Quiz6/Q26.webp",
    "question": "In database normalization, which normal form aims to remove partial dependencies on a composite key?",
    "options": [
      {
        "key": "A",
        "text": "First Normal Form (INF)"
      },
      {
        "key": "B",
        "text": "Second Normal Form (2NF)"
      },
      {
        "key": "C",
        "text": "Third Normal Form (3NF)"
      },
      {
        "key": "D",
        "text": "Boyce-Codd Normal Form (BCNF)"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Second Normal Form (2NF)\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"First Normal Form (INF)\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Second Normal Form (2NF). Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Third Normal Form (3NF)\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Boyce-Codd Normal Form (BCNF)\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz6/Q27.webp",
    "question": "How does modeling dynamic interaction assist in designing subsystems?",
    "options": [
      {
        "key": "A",
        "text": "Captures the message flow between system components"
      },
      {
        "key": "B",
        "text": "Centralizes object modeling processes"
      },
      {
        "key": "C",
        "text": "Eliminates the need for state diagrams"
      },
      {
        "key": "D",
        "text": "Automates testing frameworks"
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Centralizes object modeling processes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Captures the message flow between system components\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Centralizes object modeling processes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Eliminates the need for state diagrams\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Automates testing frameworks\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz6/Q28.webp",
    "question": "What is a finite state machine?",
    "options": [
      {
        "key": "A",
        "text": "machine with infinite states"
      },
      {
        "key": "B",
        "text": "machine with finite states"
      },
      {
        "key": "C",
        "text": "model of computation"
      },
      {
        "key": "D",
        "text": "model of system behavior"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"machine with finite states\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"machine with infinite states\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: machine with finite states. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"model of computation\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"model of system behavior\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz6/Q29.webp",
    "question": "In COMET, which diagram integrates static and dynamic models for software design?",
    "options": [
      {
        "key": "A",
        "text": "Statechart diagram"
      },
      {
        "key": "B",
        "text": "Interaction diagram"
      },
      {
        "key": "C",
        "text": "Composite class interaction diagram"
      },
      {
        "key": "D",
        "text": "Package diagram"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Interaction diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Statechart diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Interaction diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Composite class interaction diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Package diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz6/Q30.webp",
    "question": "Which UML diagram is primarily used for modeling relationships between",
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
    "id": 31,
    "image": "../Quiz6/Q31.webp",
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
    "id": 32,
    "image": "../Quiz6/Q32.webp",
    "question": "Which kind of object executes a state machine?",
    "options": [
      {
        "key": "A",
        "text": "Any software object"
      },
      {
        "key": "B",
        "text": "An entity object"
      },
      {
        "key": "C",
        "text": "A state-dependent control object"
      },
      {
        "key": "D",
        "text": "A state chart"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An entity object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Any software object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An entity object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A state-dependent control object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A state chart\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz6/Q33.webp",
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
    "id": 34,
    "image": "../Quiz6/Q34.webp",
    "question": "What happens in a CalVReturn pattern? A. A calling operation in the calling object sends a message to an operation method) in the called",
    "options": [
      {
        "key": "A",
        "text": "object"
      },
      {
        "key": "B",
        "text": "A calling operation in the calling object invokes an operation (a.k.a. method) in the called object"
      },
      {
        "key": "C",
        "text": "The calling object waits for a response from the called object"
      },
      {
        "key": "D",
        "text": "The calling object does not wait for a response from the called object"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A calling operation in the calling object invokes an operation (a.k.a. method) in the called object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A calling operation in the calling object invokes an operation (a.k.a. method) in the called object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The calling object waits for a response from the called object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The calling object does not wait for a response from the called object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz6/Q35.webp",
    "question": "What is the primary focus of state-dependent dynamic interaction modeling?",
    "options": [
      {
        "key": "A",
        "text": "Capturing the physical structure of the system"
      },
      {
        "key": "B",
        "text": "Modeling the behavior of objects based on their state changes"
      },
      {
        "key": "C",
        "text": "Defining the database schema for the system _"
      },
      {
        "key": "D",
        "text": "Identifying reusable software components"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Modeling the behavior of objects based on their state changes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Capturing the physical structure of the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Modeling the behavior of objects based on their state changes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Defining the database schema for the system _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Identifying reusable software components\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz6/Q36.webp",
    "question": "Which software architecture perspectives are explained?",
    "options": [
      {
        "key": "A",
        "text": "Static, dynamic, and deployment views"
      },
      {
        "key": "B",
        "text": "Static, deployment, and user interface views"
      },
      {
        "key": "C",
        "text": "Dynamic, user interface, and data management views"
      },
      {
        "key": "D",
        "text": "Deployment, user interface, and data management views"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Static, deployment, and user interface views\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Static, dynamic, and deployment views\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Static, deployment, and user interface views. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Dynamic, user interface, and data management views\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Deployment, user interface, and data management views\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz6/Q37.webp",
    "question": "When is a control subsystem required?",
    "options": [
      {
        "key": "A",
        "text": "If the subsystem needs to control several internal objects"
      },
      {
        "key": "B",
        "text": "If the subsystem needs to control multiple 1/0 devices"
      },
      {
        "key": "C",
        "text": "If the subsystem needs to control multiple client subsystems"
      },
      {
        "key": "D",
        "text": "If the subsystem needs to control the execution of other subsystems"
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"If the subsystem needs to control multiple 1/0 devices\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"If the subsystem needs to control several internal objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: If the subsystem needs to control multiple 1/0 devices. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"If the subsystem needs to control multiple client subsystems\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"If the subsystem needs to control the execution of other subsystems\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz6/Q38.webp",
    "question": "What does 'Separation of Concerns' in subsystem design aim to achieve?",
    "options": [
      {
        "key": "A",
        "text": "To ensure that all subsystems use the same database"
      },
      {
        "key": "B",
        "text": "To distribute user interface elements evenly across subsystems"
      },
      {
        "key": "C",
        "text": "To minimize coupling and maximize cohesion within subsystems"
      },
      {
        "key": "D",
        "text": "To allocate similar programming tasks to the development team"
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To distribute user interface elements evenly across subsystems\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To ensure that all subsystems use the same database\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To distribute user interface elements evenly across subsystems. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To minimize coupling and maximize cohesion within subsystems\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To allocate similar programming tasks to the development team\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz6/Q39.webp",
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
        "text": "1/0 subsystem"
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
        "D": "Sai: \"1/0 subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz6/Q40.webp",
    "question": "Which of the following is an entity class?",
    "options": [
      {
        "key": "A",
        "text": "boundary class"
      },
      {
        "key": "B",
        "text": "algorithm class"
      },
      {
        "key": "C",
        "text": "control class"
      },
      {
        "key": "D",
        "text": "data abstraction class"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"algorithm class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"boundary class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: algorithm class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"control class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"data abstraction class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz6/Q41.webp",
    "question": "Which of the following is true for an abstract class?",
    "options": [
      {
        "key": "A",
        "text": "It is used as a template for creating objects."
      },
      {
        "key": "B",
        "text": "It is used as a template for creating subclasses."
      },
      {
        "key": "C",
        "text": "It is used as a template for creating classes."
      },
      {
        "key": "D",
        "text": "It is used as a template for creating super classes."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It is used as a template for creating subclasses.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"It is used as a template for creating objects.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: It is used as a template for creating subclasses.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"It is used as a template for creating classes.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"It is used as a template for creating super classes.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz6/Q42.webp",
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
    "id": 43,
    "image": "../Quiz6/Q43.webp",
    "question": "While creating a client'server architecture, which elements or factors should be taken into account?",
    "options": [
      {
        "key": "A",
        "text": "Whether the service should be sequential or concurrent"
      },
      {
        "key": "B",
        "text": "The communication patterns between the client and service subsystems"
      },
      {
        "key": "C",
        "text": "All of the mentioned"
      },
      {
        "key": "D",
        "text": "None of the mentioned"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The communication patterns between the client and service subsystems\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Whether the service should be sequential or concurrent\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The communication patterns between the client and service subsystems. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"All of the mentioned\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the mentioned\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz6/Q44.webp",
    "question": "What are three methods for mapping a relational database to a generalization]specialization hierarchy(Select all the right responses)?",
    "options": [
      {
        "key": "A",
        "text": "All attributes of the superclass and its subclasses are stored in a single database table, with a discriminator column to differentiate between subclasses _"
      },
      {
        "key": "B",
        "text": "Each class in the hierarchy is mapped to its database table, with the superclass table containing common attributes and subclass tables containing specific attributes."
      },
      {
        "key": "C",
        "text": "Each subclass in the hierarchy is mapped to ts database table, including attributes inherited from the superclass, avoiding null values and ensuring relevance but potentially leading to data redundancy."
      },
      {
        "key": "D",
        "text": "Superclasses and subclasses are merged to only one table."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Each class in the hierarchy is mapped to its database table, with the superclass table containing common attributes and subclass tables containing specific attributes.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"All attributes of the superclass and its subclasses are stored in a single database table, with a discriminator column to differentiate between subclasses _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Each class in the hierarchy is mapped to its database table, with the superclass table containing common attributes and subclass tables containing specific attributes.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Each subclass in the hierarchy is mapped to ts database table, including attributes inherited from the superclass, avoiding null values and ensuring relevance but potentially leading to data redundancy.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Superclasses and subclasses are merged to only one table.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz6/Q45.webp",
    "question": "Which type of relationship necessitates using a concatenated key as the primary key in an association table?",
    "options": [
      {
        "key": "A",
        "text": "One-to-one relationship"
      },
      {
        "key": "B",
        "text": "One-to-many relationship"
      },
      {
        "key": "C",
        "text": "Many-to-many relationship"
      },
      {
        "key": "D",
        "text": "Aggregate or composite relationship"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"One-to-many relationship\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"One-to-one relationship\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: One-to-many relationship. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Many-to-many relationship\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Aggregate or composite relationship\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz6/Q46.webp",
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
    "id": 47,
    "image": "../Quiz6/Q47.webp",
    "question": "What is a common approach to securing services in SOA?",
    "options": [
      {
        "key": "A",
        "text": "using open access without authentication"
      },
      {
        "key": "B",
        "text": "Implementing service-level security mechanisms such as OAuth"
      },
      {
        "key": "C",
        "text": "Relying on client-side security only"
      },
      {
        "key": "D",
        "text": "Avoiding encryption to reduce overhead"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Implementing service-level security mechanisms such as OAuth\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"using open access without authentication\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Implementing service-level security mechanisms such as OAuth. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Relying on client-side security only\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Avoiding encryption to reduce overhead\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz6/Q48.webp",
    "question": "What is the main role of a broker in SOA?",
    "options": [
      {
        "key": "A",
        "text": "Manage the resources of services _"
      },
      {
        "key": "B",
        "text": "Perform services on behalf of the client"
      },
      {
        "key": "C",
        "text": "Act as an intermediary between clients and services _"
      },
      {
        "key": "D",
        "text": "Store detailed information about all clients and services _"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Perform services on behalf of the client\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Manage the resources of services _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Perform services on behalf of the client. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Act as an intermediary between clients and services _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Store detailed information about all clients and services _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz6/Q49.webp",
    "question": "What is a component in the context of software architecture?",
    "options": [
      {
        "key": "A",
        "text": "single class or function."
      },
      {
        "key": "B",
        "text": "way to group artifacts together, often with nesting."
      },
      {
        "key": "C",
        "text": "database or server."
      },
      {
        "key": "D",
        "text": "user interface element"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"way to group artifacts together, often with nesting.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"single class or function.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: way to group artifacts together, often with nesting.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"database or server.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"user interface element\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz6/Q50.webp",
    "question": "In integrating patterns into object models, which artifact typically captures the collaborative behavior among classes?",
    "options": [
      {
        "key": "A",
        "text": "Statechart diagram"
      },
      {
        "key": "B",
        "text": "Class diagram"
      },
      {
        "key": "C",
        "text": "Interaction diagram"
      },
      {
        "key": "D",
        "text": "Deployment diagram"
      }
    ],
    "answer": "D",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Deployment diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Statechart diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"Class diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Interaction diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Deployment diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz6/Q51.webp",
    "question": "What is the primary responsibility of an architect regarding components?",
    "options": [
      {
        "key": "A",
        "text": "Writing the code within the components _"
      },
      {
        "key": "B",
        "text": "Defining, refining, managing, and governing components."
      },
      {
        "key": "C",
        "text": "Testing the components _"
      },
      {
        "key": "D",
        "text": "Deploying the components to production."
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Defining, refining, managing, and governing components.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Writing the code within the components _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Defining, refining, managing, and governing components.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Testing the components _\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Deploying the components to production.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz6/Q52.webp",
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
    "id": 53,
    "image": "../Quiz6/Q53.webp",
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
    "id": 54,
    "image": "../Quiz6/Q54.webp",
    "question": "What is a control task?",
    "options": [
      {
        "key": "A",
        "text": "task that control other tasks"
      },
      {
        "key": "B",
        "text": "task that executes a statechart"
      },
      {
        "key": "C",
        "text": "task that executes on demand"
      },
      {
        "key": "D",
        "text": "task that controls 1/0 devices"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"task that executes a statechart\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"task that control other tasks\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: task that executes a statechart. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"task that executes on demand\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"task that controls 1/0 devices\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz6/Q55.webp",
    "question": "What is \"variability\" in the context of a Software Product Line?",
    "options": [
      {
        "key": "A",
        "text": "The fixed, unchangeable components of the system"
      },
      {
        "key": "B",
        "text": "The ability to reuse code across different projects"
      },
      {
        "key": "C",
        "text": "The aspects of the system that can be customized or configured for different products"
      },
      {
        "key": "D",
        "text": "The uniformity of design across all products"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The ability to reuse code across different projects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The fixed, unchangeable components of the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The ability to reuse code across different projects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The aspects of the system that can be customized or configured for different products\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The uniformity of design across all products\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz6/Q56.webp",
    "question": "What does the SPL software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a family of buildings"
      },
      {
        "key": "B",
        "text": "The structure of a Client/Server product family"
      },
      {
        "key": "C",
        "text": "The overall structure of the software productline"
      },
      {
        "key": "D",
        "text": "The software product line classes and their relationships"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The structure of a Client/Server product family\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a family of buildings\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The structure of a Client/Server product family. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The overall structure of the software productline\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software product line classes and their relationships\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz6/Q57.webp",
    "question": "What is a kernel system in a SPL?",
    "options": [
      {
        "key": "A",
        "text": "A member of the SPL only composed of kernel classes"
      },
      {
        "key": "B",
        "text": "A member of the SPL composed of kernel classes and possibly some default classes"
      },
      {
        "key": "C",
        "text": "A member of the SPL composed of kernel classes and possibly some optional classes"
      },
      {
        "key": "D",
        "text": "A member of the SPL composed of kernel classes and possibly some entity classes"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A member of the SPL composed of kernel classes and possibly some default classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A member of the SPL only composed of kernel classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A member of the SPL composed of kernel classes and possibly some default classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A member of the SPL composed of kernel classes and possibly some optional classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A member of the SPL composed of kernel classes and possibly some entity classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz6/Q58.webp",
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
    "id": 59,
    "image": "../Quiz6/Q59.webp",
    "question": "What is the primary purpose of database normalization?",
    "options": [
      {
        "key": "A",
        "text": "Increase redundancy"
      },
      {
        "key": "B",
        "text": "Minimize data duplication"
      },
      {
        "key": "C",
        "text": "Create more tables"
      },
      {
        "key": "D",
        "text": "Reduce query performance"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Minimize data duplication\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Increase redundancy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Minimize data duplication. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Create more tables\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Reduce query performance\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz6/Q60.webp",
    "question": "What is the relationship between modularity and maintainability?",
    "options": [
      {
        "key": "A",
        "text": "Modularity has no impact on maintainability."
      },
      {
        "key": "B",
        "text": "Higher modularity generally makes a system less maintainable."
      },
      {
        "key": "C",
        "text": "Higher modularity generally makes a system more maintainable."
      },
      {
        "key": "D",
        "text": "Modularity only affects performance, not maintainability."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Higher modularity generally makes a system less maintainable.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Modularity has no impact on maintainability.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Higher modularity generally makes a system less maintainable.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Higher modularity generally makes a system more maintainable.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Modularity only affects performance, not maintainability.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  }
];
