(() => {
    const Role = {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin : 'SuperAdmin',
        // Teacher,
        Teacher : 'Sir. Jr',
        // Student,
        Student : 'Ker',
    } as const ;
// equals sign changed to colon :

    // let userRole: Role = 1;
    // let userRole: Role = Role.SuperAdmin;
    console.log(Role.Student);
})();