export const featureIcons = {
  // TareaSync (español)
  'CRUD de tareas': 'fa-solid fa-list-check',
  'Asignación múltiple': 'fa-solid fa-users',
  'Historial de actividad': 'fa-solid fa-clock-rotate-left',
  'Adjuntar imágenes': 'fa-solid fa-image',
  'Notificaciones por correo': 'fa-solid fa-envelope',
  'Recordatorios automáticos': 'fa-solid fa-bell',
  'Control de lectura': 'fa-solid fa-eye',
  'Autenticación JWT': 'fa-solid fa-shield-halved',
  'Recurrencia de tareas': 'fa-solid fa-arrows-rotate',
  'Vistas: Lista, Kanban, Calendario': 'fa-solid fa-table-columns',
  'Dashboard con KPIs': 'fa-solid fa-chart-bar',
  'Drag & Drop en Kanban': 'fa-solid fa-arrows-up-down',
  'Modo oscuro / claro': 'fa-solid fa-moon',
  'Silenciar notificaciones': 'fa-solid fa-volume-xmark',
  // TareaSync (inglés)
  'Task CRUD': 'fa-solid fa-list-check',
  'Multiple assignment': 'fa-solid fa-users',
  'Activity history': 'fa-solid fa-clock-rotate-left',
  'Attach images': 'fa-solid fa-image',
  'Email notifications': 'fa-solid fa-envelope',
  'Automatic reminders': 'fa-solid fa-bell',
  'Read control': 'fa-solid fa-eye',
  'JWT authentication': 'fa-solid fa-shield-halved',
  'Task recurrence': 'fa-solid fa-arrows-rotate',
  'Views: List, Kanban, Calendar': 'fa-solid fa-table-columns',
  'Dashboard with KPIs': 'fa-solid fa-chart-bar',
  'Drag & Drop in Kanban': 'fa-solid fa-arrows-up-down',
  'Dark / Light mode': 'fa-solid fa-moon',
  'Mute notifications': 'fa-solid fa-volume-xmark',
  // Seguro Vehicular (español)
  'Catálogo de Servicios': 'fa-solid fa-list',
  'Búsqueda en Tiempo Real': 'fa-solid fa-magnifying-glass',
  'Centro de Siniestros Digitales': 'fa-solid fa-file-lines',
  'Asistencia Vial 24/7': 'fa-solid fa-phone',
  'Descarga de Pólizas': 'fa-solid fa-file-pdf',
  'Código QR para App Móvil': 'fa-solid fa-qrcode',
  'Diseño Responsive': 'fa-solid fa-mobile-screen',
  'Interfaz Profesional': 'fa-solid fa-building',
  // Seguro Vehicular (inglés)
  'Services Catalog': 'fa-solid fa-list',
  'Real-time Search': 'fa-solid fa-magnifying-glass',
  'Digital Claims Center': 'fa-solid fa-file-lines',
  '24/7 Roadside Assistance': 'fa-solid fa-phone',
  'Policy Download': 'fa-solid fa-file-pdf',
  'QR Code for Mobile App': 'fa-solid fa-qrcode',
  'Responsive Design': 'fa-solid fa-mobile-screen',
  'Professional Interface': 'fa-solid fa-building',
  // Sistema de Inventario (español)
  'Multi-empresa': 'fa-solid fa-building',
  'Autenticación JWT': 'fa-solid fa-shield-halved',
  'Gestión de Productos': 'fa-solid fa-boxes',
  'Control de Stock': 'fa-solid fa-cubes',
  'Registro de Ventas': 'fa-solid fa-cart-shopping',
  'Gestión de Pedidos': 'fa-solid fa-truck',
  'Dashboard con KPIs': 'fa-solid fa-chart-pie',
  'Recuperación de contraseña': 'fa-solid fa-key',
  'Interfaz Responsiva': 'fa-solid fa-mobile-screen',
  'Exportación a CSV': 'fa-solid fa-file-csv',
  // Sistema de Inventario (inglés)
  'Multi-company': 'fa-solid fa-building',
  'JWT Authentication': 'fa-solid fa-shield-halved',
  'Product Management': 'fa-solid fa-boxes',
  'Stock Control': 'fa-solid fa-cubes',
  'Sales Registration': 'fa-solid fa-cart-shopping',
  'Order Management': 'fa-solid fa-truck',
  'Dashboard with KPIs': 'fa-solid fa-chart-pie',
  'Password Recovery': 'fa-solid fa-key',
  'Responsive Interface': 'fa-solid fa-mobile-screen',
  'CSV Export': 'fa-solid fa-file-csv'
};

export const projectData = {
  tareasync: {
    es: {
      title: 'TareaSync - Gestor de Tareas',
      tag: 'Full Stack',
      meta: 'Demo: tareasync.vercel.app',
      description: 'TareaSync es una aplicación web full-stack para la gestión de tareas entre usuarios y administradores. Permite crear, asignar y hacer seguimiento de tareas con notificaciones por correo en tiempo real.',
      features: [
        'CRUD de tareas', 'Asignación múltiple', 'Historial de actividad',
        'Adjuntar imágenes', 'Notificaciones por correo', 'Recordatorios automáticos',
        'Control de lectura', 'Autenticación JWT', 'Recurrencia de tareas',
        'Vistas: Lista, Kanban, Calendario', 'Dashboard con KPIs',
        'Drag & Drop en Kanban', 'Modo oscuro / claro', 'Silenciar notificaciones'
      ],
      techs: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer', 'Nodemailer', 'JWT',
        'node-cron', 'Vite', 'Axios', 'react-big-calendar', 'Lucide React', 'jwt-decode'
      ],
      repo: 'github.com/jorgeF1990/gestor_de_tarea',
      demo: 'tareasync.vercel.app',
      credentials: {
        email: 'test@test.com',
        password: '123456'
      }
    },
    en: {
      title: 'TareaSync - Task Manager',
      tag: 'Full Stack',
      meta: 'Demo: tareasync.vercel.app',
      description: 'TareaSync is a full-stack web application for task management between users and administrators. It allows creating, assigning and tracking tasks with real-time email notifications.',
      features: [
        'Task CRUD', 'Multiple assignment', 'Activity history',
        'Attach images', 'Email notifications', 'Automatic reminders',
        'Read control', 'JWT authentication', 'Task recurrence',
        'Views: List, Kanban, Calendar', 'Dashboard with KPIs',
        'Drag & Drop in Kanban', 'Dark / Light mode', 'Mute notifications'
      ],
      techs: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer', 'Nodemailer', 'JWT',
        'node-cron', 'Vite', 'Axios', 'react-big-calendar', 'Lucide React', 'jwt-decode'
      ],
      repo: 'github.com/jorgeF1990/gestor_de_tarea',
      demo: 'tareasync.vercel.app',
      credentials: {
        email: 'test@test.com',
        password: '123456'
      }
    }
  },
  seguro: {
    es: {
      title: 'Seguro Vehicular Premium',
      tag: 'Frontend',
      meta: 'Demo: segurovehicularprimium.netlify.app',
      description: 'Seguro Vehicular Premium es una plataforma digital diseñada para ofrecer una experiencia completa en la gestión de seguros de automóviles. Permite a los usuarios explorar diferentes coberturas, acceder a asistencia vial, gestionar siniestros y descargar documentación importante de manera ágil y profesional.',
      features: [
        'Catálogo de Servicios', 'Búsqueda en Tiempo Real',
        'Centro de Siniestros Digitales', 'Asistencia Vial 24/7',
        'Descarga de Pólizas', 'Código QR para App Móvil',
        'Diseño Responsive', 'Interfaz Profesional'
      ],
      techs: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Font Awesome 6', 'Google Fonts (Inter)'],
      repo: 'github.com/jorgeF1990/segurovehivularprimium',
      demo: 'segurovehicularprimium.netlify.app'
    },
    en: {
      title: 'Premium Vehicle Insurance',
      tag: 'Frontend',
      meta: 'Demo: segurovehicularprimium.netlify.app',
      description: 'Premium Vehicle Insurance is a digital platform designed to offer a complete experience in managing car insurance. It allows users to explore different coverages, access roadside assistance, manage claims and download important documentation quickly and professionally.',
      features: [
        'Services Catalog', 'Real-time Search',
        'Digital Claims Center', '24/7 Roadside Assistance',
        'Policy Download', 'QR Code for Mobile App',
        'Responsive Design', 'Professional Interface'
      ],
      techs: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Font Awesome 6', 'Google Fonts (Inter)'],
      repo: 'github.com/jorgeF1990/segurovehivularprimium',
      demo: 'segurovehicularprimium.netlify.app'
    }
  },
  inventario: {
    es: {
      title: 'Sistema de Control de Stock',
      tag: 'Full Stack',
      meta: 'Demo: sistema-control-stock.netlify.app',
      description: 'Sistema profesional de gestión de inventario multi-empresa con autenticación, dashboards en tiempo real y API REST. Permite gestionar productos, ventas, pedidos y proveedores con control de stock y alertas.',
      features: [
        'Multi-empresa', 'Autenticación JWT', 'Gestión de Productos',
        'Control de Stock', 'Registro de Ventas', 'Gestión de Pedidos',
        'Dashboard con KPIs', 'Recuperación de contraseña',
        'Interfaz Responsiva', 'Exportación a CSV'
      ],
      techs: ['React 18', 'FastAPI', 'MySQL', 'JWT', 'Bcrypt', 'Material-UI', 'Chart.js', 'Vite', 'Axios'],
      repo: 'github.com/jorgeF1990/sistema_de_inventario',
      demo: 'sistema-control-stock.netlify.app',
      credentials: {
        email: 'admin',
        password: 'admin123'
      }
    },
    en: {
      title: 'Stock Control System',
      tag: 'Full Stack',
      meta: 'Demo: sistema-control-stock.netlify.app',
      description: 'Professional multi-company inventory management system with authentication, real-time dashboards and REST API. Allows managing products, sales, orders and suppliers with stock control and alerts.',
      features: [
        'Multi-company', 'JWT Authentication', 'Product Management',
        'Stock Control', 'Sales Registration', 'Order Management',
        'Dashboard with KPIs', 'Password Recovery',
        'Responsive Interface', 'CSV Export'
      ],
      techs: ['React 18', 'FastAPI', 'MySQL', 'JWT', 'Bcrypt', 'Material-UI', 'Chart.js', 'Vite', 'Axios'],
      repo: 'github.com/jorgeF1990/sistema_de_inventario',
      demo: 'sistema-control-stock.netlify.app',
      credentials: {
        email: 'admin',
        password: 'admin123'
      }
    }
  }
};