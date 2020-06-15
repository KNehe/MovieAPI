import bcrypt  from 'bcryptjs';

const hash = async (password) =>{

    return  await bcrypt.hash(password, 8);
};

const compare = async( rawPassword, hashedPassword) =>{

  return await bcrypt.compare(rawPassword, hashedPassword);
};

export default { hash , compare };