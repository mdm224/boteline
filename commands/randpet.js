const { url } = require('inspector');
const probe = require('probe-image-size');
async function handleRandpet(message) {

    const pets = [
        {url: 'https://mdm-pics.com/pet/Rage%20%231.jpg', animal: 'cat', isCommonPhobia: false, user: 'Rage', petName: 'Patches'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihauomI-bFpZXfObjxh9XvnLxYPmnXs2GxYuGJHzWiPJ8BxrnmDXY2UcoodUMoQwaGCZlMLPKxI4yEI2ZMNiyPl80gPo5yeEyvE=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'GotaLoveYaoi', petName: 'Yoshi'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYrVF20FZ8SaiIRpCS1nW9KZwTV8YR6LsSg-cqWe7YZjPAJrpfgLs6T9G355CBaEFgt2i9cvCUUly0shHV0jpbkThaBq_3BVQ=w1879-h939-rw-v10', animal: 'cat', isCommonPhobia: false, user: 'GotaLoveYaoi', petName: 'Yoshi'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbB3oIZqH04XShzAZG2az6W6CgSyYE5DnDyyfPrOK9kaPHmtoymQsGfA-KCZ94N-HUfHQMYqBOBwSTr-8zr1D8cxKSXK57NtWE=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'GotaLoveYaoi', petName: 'Yoshi'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ-ZFByJxNEX2jxb3n4mwtXnA65VFJ79i88sn1Kvn6bZkkbRGPyD_2o7Sa9EILToFXVMSNKE6msoH8rr0rrHxxOaWq_YpxBMeA=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'zipzapadam', petName: 'Adele'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbCM4l7gUjpVAzlxnbwrFsjfSRXLALzBna4J036Sjv4uCMiOkT5fT_xsIzl1rBDRYdPauBHNRfa2qC6A44rhgw2VzTfne_KjA=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'zipzapadam', petName: 'Lola'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaWnk8d7KIHqKJ82EV-9C9EHIGu5wt0ELFM8RZsP2cGneKYpTLl-F0kzEdwr8AAfcvN_rxLrQOg-x5S9tytLTfg4LLLmtntYGE=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'zipzapadam', petName: 'Mia'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaUNnRrI_GLWkUVh8IWRypXfI1hZU87LJL_UIFC_UngBahc7CMHHyDcZOewaNupDFYCrAymhBlIu6o8jwmhV0oOaHvT-DGyOUs=w1879-h939-rw-v1', animal: 'dog', isCommonPhobia: false, user: 'Gimmicky', petName: 'Sage'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbwCgMmEDWlW85rx3C_rhnCmpxOJ5PL8iUnIegT02qmuAI7HKR80PSvupR5XR8jy2UPx81JHQaK-4RDEVu5mw8jT7njcIIVj6Q=w1879-h939-rw-v1', animal: 'dog', isCommonPhobia: false, user: 'Gimmicky', petName: 'Sage'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbTn_0U7EOBHr7q2orCZd28QH4l85vcveU_VNjphYh6QbXqXnS1rBsD2NCnAQTlMJarFE1VN56BMCFUp-gz-F-zQ-Jh0VLfvg=w1879-h939-rw-v1', animal: 'dog', isCommonPhobia: false, user: 'Gimmicky', petName: 'Sage'}, 
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYi5C2agYJlRRpOamvjWcZi4jAn7b3HpODYFWClIPMytUXWMbGYABbWHiv12hLK0QGr6dtGyJdBSjjSo9uZLhjeHgeCh14z43k=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'buggirlnyc', petName: 'Kiesha'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaW2lKEu-L5AextUt4dQGq9WPiDwwUL-i6s_dWmn0Ubd-m7HUUdoel2YxTK3Urvb9lCq6-405wkSpqE-HS1UBOuN9CUquWSfVM=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'buggirlnyc', petName: 'Kiesha'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbd_HeoAVue62Vxd9b_bum1QlLN5CwbXG5KPbfqdry0BhsAroRm1URumiDkm1FZoCT1FaRg76pdR9HhCjrZgC3ZjXJrddTfSVY=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'buggirlnyc', petName: 'Kiesha'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZQicgPfnbPvWzNOfob9tZ7XyxzP-wZpvJBKoaMPAWyHxFdqTf4cbv5kYZ7PyP0cXnlNRKnMjR9jBLHEUO4jHPfZq7UO1WFq_0=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'cjw405', petName: 'Peaches'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZdrn81XTdkcEOLJYkrJ5FeUAWk8TqB4NgakIZAVRfzFiRBTo4HhxKkMdpjagVfTshfTGJ2fCdXjJMPf8-nfFlDjy_TC3fzGN0=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'cjw405', petName: 'Peaches'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbHN5o6Sj8SP91e7LXoNvjYADd2CSRvIR3gkZoyIic6GnX3jGkNli86Zvk6j1torIKEObBIxgFtQBw9oFXekvYv2ibv2R88AAg=w1879-h939-rw-v1', animal: 'cat', isCommonPhobia: false, user: 'cjw405', petName: 'Peaches'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihak5OTWmIDSExmKj3_-n9cTHGJVErzqEEm_kSUVq0zD2O4nqxJj8dRPh_yl_x_981THBCt86b0_ovb1vPT_mz86pAi2EsfN1Oc=w1879-h939-rw-v1', animal: 'dog', isCommonPhobia: false, user: 'yoshman8', petName: 'Coco'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbrVhW2318f5qJ30x542iMzeLmIm60elPeWNkV17d1ilQae3Hmmz3ryrlZyGMkFKLOUA-MOeg1BRPylB3PsgVQuP3Wapsi3H3s=w1879-h939-rw-v1', animal: 'dog', isCommonPhobia: false, user: 'maypletreeway', petName: 'Kika'}
    ]

    const randomIndex = Math.floor(Math.random() * pets.length);
    console.log(randomIndex);
    const url = pets[randomIndex].url;
    const animal = pets[randomIndex].animal;
    const user = pets[randomIndex].user;
    const petName = pets[randomIndex].petName;
    let result = await probe(url);

    width = result.width;
    height = result.height;
    maxHeight = 300;
    maxWidth = 300;
    
    if (width <= maxWidth && height <= maxHeight){
        width = width;
        height = height; 
    }

    
    else {
    const ratio = Math.min(maxHeight / height, maxWidth / width);
    width = Math.round(width * ratio);
    height = Math.round(height * ratio);
    }

    if (pets[randomIndex].isCommonPhobia === true)
    {
        return message.reply(`/adduhtml ${randomIndex}, <div ><details> <summary style="border: 5px solid gray; border-radius: 10px; padding: 10px;"> Click to view a user's pet! Trigger Warning: the following image contains a ${animal}! </summary> <img src="${url}" width="${width}" height="${height}"> <Strong> <br> <span style="color: #8097ba">${petName}</span></Strong>, submitted by <username>${user}</username>! </details> </div>`);
    }

    else{
        
        return message.reply(`/adduhtml ${randomIndex}, <img src="${url}" width="${width}" height="${height}"> <Strong> <br> ${petName}</Strong>, submitted by <username>${user}</username>!`);
    }
}


handleRandpet.requiresArgs = false;
module.exports = handleRandpet;
