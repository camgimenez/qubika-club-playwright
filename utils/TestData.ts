export const generateUserData = () => {
  const timestamp = Date.now();
  return {
    email: `cg_${timestamp}@qubika.com`,
    password: 'Password123!',
    roles: ['ROLE_ADMIN'],
  };
};

export const categoryData = {
  parentName: `Parent-CAT-CG-${Date.now()}`,
  subCategoryName: `Sub-CAT-CG-${Date.now()}`,
};
