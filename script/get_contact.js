async function getContact() {
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    if (!navigator.contacts || !window.ContactsManager) {
        return null;
    }

    let propertiesAvailable = await navigator.contacts.getProperties();

    let contact = await navigator.contacts.select(propertiesAvailable, { multiple: false });

    return contact;

}
