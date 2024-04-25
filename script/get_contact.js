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
    let icon = Uint8Array(await contact[0].icon[0].arrayBuffer());

    return [name, phone, icon];
}
