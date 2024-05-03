async function getContact() {
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    if (!navigator.contacts || !window.ContactsManager) {
        return null;
    }

    let contact = await navigator.contacts.select(['name', 'tel', 'icon'], { multiple: false });

    let name = contact[0].name[0];

    let phone = contact[0].tel[0];
    
    let icon;

    if (contact[0].icon && contact[0].icon[0]) {
        icon = new Uint8Array(await contact[0].icon[0].arrayBuffer());
    } else {
        icon = null;
    }

    return [name, phone, icon];
}
