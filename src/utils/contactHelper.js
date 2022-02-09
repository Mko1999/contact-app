export const contactSort = (a, b) =>{
          return `${a.firstName} ${a.lastName}`
            .toLowerCase()
            .localeCompare(`${b.firstName} ${b.lastName}`.toLowerCase())
        }

export const contactGroup = (object, contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`.trim();
    const key = fullName[0].toUpperCase();

    if (!object[key]) {
      object[key] = [];
    }

    object[key].push(contact);

    return object;
  }