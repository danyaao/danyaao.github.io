async function getContact() {
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    if (!navigator.contacts || !window.ContactsManager) {
        return null;
    }

    let contact = await navigator.contacts.select(['name', 'tel', 'icon'], { multiple: false });

    alert(contact[0].name[0]);

    return `${contact[0].name[0]};;;${contact[0].tel[0]};;;${contact[0].icon[0]}`;
}
