async function getFlashcard(url, collectionId) {
    try {
        const data = await fetch(`${url}/${collectionId}`); // Call API to fetch data
        const response = await data.json(); // Parse JSON data into an object

        // Check if response has a 'cards' property
        if (response.hasOwnProperty('cards')) {
            // If 'cards' is an array, return it
            if (Array.isArray(response.cards)) {
                return response.cards;
            } else {
                console.log("Error: The 'cards' property is not an array.");
                return [];
            }
        } else {
            // If 'cards' doesn't exist, assume 'collections' is an array of objects with 'cards' arrays
            const allCards = response.collections.flatMap((collection) => collection.cards);
            return allCards;
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        return [];
    }
}

async function addFlashcard(url, collectionId, newFlashcard) {
    try {
        const res = await fetch(`${url}/collections/${collectionId}`, {
            method: 'PATCH', // แก้ไขข้อมูลโดยเพิ่มข้อมูลใหม่
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                newCard: newFlashcard // ส่งข้อมูลการ์ดใหม่ไปด้วย
            })
        });

        const updatedCollection = await res.json(); // รับข้อมูลคอลเล็กชันที่ถูกอัปเดตกลับมา

        // ส่งคอลเล็กชันที่ถูกอัปเดตไปยังเมธอดเรียกใช้
        return updatedCollection;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}                                            
// async function addFlashcard (url, collectionId, newFlashcard) => {
//     try {
//       // เรียกข้อมูลคอลเล็กชันทั้งหมด
//       const response = await fetch(`${url}/collections`);
//       const collections = await response.json();
  
//       // หา index ของคอลเล็กชันที่ต้องการแก้ไข
//       const collectionIndex = collections.findIndex(
//         (collection) => collection.id === collectionId
//       );
  
//       // ตรวจสอบว่าพบคอลเล็กชันหรือไม่
//       if (collectionIndex === -1) {
//         throw new Error("Collection not found");
//       }
  
//       // เพิ่มข้อมูลการ์ดเข้าไปในคอลเล็กชันที่มีอยู่แล้ว
//       collections[collectionIndex].cards.push(newFlashcard);
  
//       // ส่งข้อมูลคอลเล็กชันที่อัปเดตแล้วกลับไปยังเซิร์ฟเวอร์
//       const updateResponse = await fetch(`${url}/collections/${collectionId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(collections[collectionIndex]), // ส่ง JSON ของคอลเล็กชันที่อัปเดตแล้ว
//       });
  
//       // ตรวจสอบว่าการอัปเดตสำเร็จหรือไม่
//       if (!updateResponse.ok) {
//         throw new Error("Failed to update collection");
//       }
  
//       // รับข้อมูลคอลเล็กชันที่อัปเดตแล้วกลับมา
//       const updatedCollection = await updateResponse.json();
//       return updatedCollection;
//     } catch (error) {
//       console.error("Error adding new card:", error);
//       return null;
//     }
//   };
  

// async function addFlashcard(url, newFlashcard) {
//     try {
//         const res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 ...newFlashcard
//             })
//         })
//         const addedFlashcard = await res.json()
//         return addedFlashcard
//     } catch (error) {
//         console.log(`error: ${error}`)
//     }
// }

async function deleteFlashcardById(url, id) {
    // console.log(`${url}?id=${id}`);
    try {
        const res = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        return res.status
    } catch (error) {
        console.log(`error: ${error}`)
    }
}

export { getFlashcard, addFlashcard, deleteFlashcardById }
