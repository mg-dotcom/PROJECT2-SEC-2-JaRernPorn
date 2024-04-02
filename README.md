# Project2-sec-2-JaRernPorn

## Members
| Student Id | Name  | Responsible | Percentage |
| ------------- | ------------- | ------------- | ------------- | 
| 65130500086 | หทัยทัต แย้มชมชื่น  | **Tailwind** :<br> - Setting<br> - WrongPopup old version<br> - Excellent Popup <br> **Logic** :<br> - all button in setting <br> - main menu & play again button| 20% |
| 65130500103 | ณัฐธิดา รุ่งเรือง  | **Tailwind** :<br> - Play game Page <br> **Logic** :<br> - Display names according to the selected category in play game page <br> -  Show image that match the selected category <br> - Generate options | 20% |
| 65130500109 | ใบตอง แซ่โค้ว  | **Tailwind** :<br> - Category page<br> **Logic** :<br> - Display pop up show correct answer when user selected wrong answer (next button function) <br> - Check answer function | 20% |
| 65130500113 | มัณฑนา คชรินทร์  | **Tailwind** :<br> - Result Page<br> - Pop-up Wrong Answer <br> **Logic** :<br> -  Change button color when answer is correct| 20% |
| 65130500120 | อภิสรา ชลประสิทธิ์  | **Tailwind** :<br> - Home Page<br> - How to play popup <br> **Logic** :<br> -  Play button link to category page <br> - How to play button show popup of how to play details <br> - Word list page section of your answer| 20% |

## List of feature

**Home Feature** 
1. กด Play เพื่อไปหน้า Categories เเละเลือกหมวดคำศัพท์ที่อยากเล่น <br>
2. กด Flashcard เพื่อไปหน้า Flashcard <br>
3. กด How to play เพื่อดูวิธีการเล่น <br>
&nbsp;- เป็น Pop-up ขึ้นมา สามารถเลื่อนดู และกดปิดที่มุมบนขวาหรือกดที่พื้นที่ว่างบนหน้าจอ

**Categories Feature** 
1. เลือกหมวดคำศัพท์ที่ต้องการเล่น
2. เมื่อกดไปที่หมวดไหน จะมี unit ย่อยให้เลือกเล่น 3 units โดยแบ่งเป็น unit ละ 3 คำศัพท์ของหมวดนั้นๆ

**Flashcard Feature** 
1. หน้าแรกของ Flashcard  <br>
&nbsp;- สามารถเพิ่ม collection และเขียนชื่อแบ่งเป็นหมวดหมู่ตามความต้องการได้ <br>
&nbsp;- สามารถแก้ไข/ลบ collection ได้ <br>
2. เมื่อกดเข้าไปตาม collection ที่สร้างมาจะเป็นหน้าของ flashcard ที่ <br>
&nbsp;- แสดงผล header ตาม collection ที่กดเข้ามา <br>
&nbsp;- สามารถเพิ่ม คำศัพท์ภาษาจีน, พินอิน, และความหมายของคำศัพท์นั้นๆ ได้ (Restart) <br>
&nbsp;- สามารถแก้ไข/ลบ flashcard ได้ <br>
&nbsp;- เมื่อสร้าง flashcard มาแล้วจะแสดงผลแค่คำศัพท์ภาษาจีนและพินอินเท่านั้น หากต้องการรู้ความหมายสามารถ toggle ที่การ์ดใบนั้นเพื่อเป็นการพลิกดูความหมายได้ <br>

**Quiz Feature** 
ใน "Quiz" จะมีเกม 4 ประเภท <br>
1. การเลือกคำตอบที่เป็นรูปภาพ: มีปุ่มเสียงภาษาจีนของคำนั้นๆ และเมื่อเลือกคำตอบแล้วต้องกดปุ่ม "check" เพื่อตรวจสอบคำตอบ <br>
&nbsp;- ถ้าเลือกคำตอบที่ถูกต้อง พื้นหลังคำตอบที่เลือกจะเป็นสีเขียว <br>
&nbsp;- แต่ถ้าเลือกคำตอบผิดจะเปลี่ยนเป็นสีแดง <br>
2. การเลือกคำตอบที่เป็นคำศัพท์: สามารถกดเพื่อฟังเสียงของคำถามได้ และเมื่อเลือกคำตอบแล้วต้องกดปุ่ม "check" เพื่อตรวจสอบคำตอบ <br>
&nbsp;- ถ้าเลือกคำตอบที่ถูกต้อง พื้นหลังคำตอบที่เลือกจะเป็นสีเขียว <br>
&nbsp;- แต่ถ้าเลือกคำตอบผิดจะแสดง pop-up คำตอบที่ถูกต้อง และกด next ไปข้อต่อไป <br>
3. การเลือกคำตอบที่เป็นคำศัพท์: ปุ่มคำตอบสามารถเสียงได้ และเมื่อเลือกคำตอบแล้วต้องกดปุ่ม "check" เพื่อตรวจสอบคำตอบ <br>
&nbsp;- ถ้าเลือกคำตอบที่ถูกต้อง พื้นหลังคำตอบที่เลือกจะเป็นสีเขียว <br>
&nbsp;- แต่ถ้าเลือกคำตอบผิดจะแสดง pop-up คำตอบที่ถูกต้อง และกด next ไปข้อต่อไป <br>
4. เกมการจับคู่คำศัพท์: ในส่วนตัวเลือกที่เป็นคำศัพท์ภาษาจีนสามารถกดเพื่อฟังเสียงได้ เมื่อจับคู่คำศัพท์และความหมายแล้ว  กดปุ่ม "check" เพื่อตรวจสอบคำตอบ <br>
&nbsp;- ถ้าจับคู่ถูกต้อง  พื้นหลังคำตอบที่เลือกจะเป็นสีเขียว <br>
&nbsp;- แต่ถ้าตอบผิดพื้นหลังจะเปลี่ยนเป็นสีแดง 2 วินาที แล้วต้องเลือกคำตอบใหม่จนกว่าจะถูกครบทุกคู่ <br>
&nbsp;- จากนั้นปุ่ม check จะเปลี่ยนเป็นปุ่ม continue เพื่อไปยังหน้าต่อไป <br>
5. ขณะเล่นเกม มี Menu ที่สามารถ <br>
&nbsp;- กดเพื่อไปหน้าหมวดหมู่ (Categories) <br>
&nbsp;- กดเพื่อเล่นหมวดนี้ใหม่อีกครั้ง (Replay) <br>
&nbsp;- กดเพื่อเล่นต่อ (Resume) <br>

**Result Feature** 
1. หน้านี้จะแสดงคำศัพท์ตามเกมที่ได้เล่นไป <br>
2. แต่ละการ์ดจะสามารถกดฟังเสียงได้ <br>

## How to play 
**คู่มือการใช้งานของแอปพลิเคชัน** <br>
1. เมื่อเข้ามาสู่หน้าหลัก จะมีทั้งหมด สองปุ่ม มีปุ่ม "Play" และปุ่ม "Flashcard" เมื่อกดปุ่ม "Play" เพื่อเข้าสู่หน้าเลือกหมวดหมู่ที่ต้องการเล่น <br>
2. สามารถกดปุ่ม "How to play" เพื่อดูวิธีการเล่น จากนั้นเลือกหมวดหมู่คำศัพท์ที่ต้องการฝึก <br>
3. ถ้าต้องการกลับไปหน้าหลัก ให้กดที่ลูกศรด้านซ้ายบน <br>
4. เมื่อเข้าสู่หน้าหมวดเกม จะมีทั้งหมด 3 units ให้เลือก โดย 1 unit จะมี 3 คำศัพท์ภาษาจีน และมีเกมทั้งหมด 4 รูปแบบ เกมแรกเลือกรูปภาพให้ตรงกับคำถาม เกมสองเลือกคำศัพท์ให้ตรงกับคำภาษาจีน เกมสามเลือกคำภาษาอังกฤษให้ตรงกับคำจีน และเกมสุดท้ายคือจับคู่คำจีนให้ตรงกับคำภาษาอังกฤษ โดยกดที่คำศัพท์ที่คิดว่าถูกต้อง <br>
5. เมื่อเกมจบแล้ว จะมีการทบทวนคำศัพท์ที่ได้เล่น <br>
6. ผู้ใช้สามารถกลับไปหน้าเลือกหมวดคำศัพท์โดยการกดปุ่ม "Main Menu" และเริ่มเล่นใหม่อีกครั้งโดยการกดปุ่ม "Play Again" <br>
7. เมื่อกดปุ่ม "Flashcard" จะมีหน้าต่างให้ผู้ใช้สร้าง Collection หมวดคำศัพท์ที่ผู้ใช้ต้องการ <br>
8. เมื่อกดเข้าไปใน Collection นั้นจะมี หน้าต่างให้สร้าง Flashcard หรือคำศัพท์ที่ผู้ใช้ต้องการจะบันทึก <br>
9. การสร้าง Flashcard จะมีให้กรอก ทั้งหมด 3 อย่าง 1.คำภาษาจีน 2.พินอิน 3.คำแปล เมื่อสร้างเสร็จจะแสดง รูปการ์ดคำศัพท์ ประกอบไปด้วย คำภาษาจีน และพินอิน ถ้าผู้ใช้ต้องการดูความหมาย ให้กดที่รูปการ์ดเหมือน พลิกการ์ดแสดงคำแปล <br>




## Demonstration video
[![](https://markdown-videos-api.jorgenkh.no/youtube/_WWVUom_DMo)](https://youtu.be/_WWVUom_DMo)

## Source of reference information 
### Inspiration Application
- Duolingo : https://www.duolingo.com/
### Pictures
1. Fruits image :
   - https://shorturl.at/muMQR
   - https://shorturl.at/CHIK9
2. Animals image :
   - https://shorturl.at/ijy09
   - https://shorturl.at/DF139
3. Family image :
   - https://rb.gy/3spf75
4. Number image :
   - https://rb.gy/5j491h
5. Color image :
   - https://rb.gy/6yd4i4
### Pronunciation
- https://elevenlabs.io/languages/chinese
## Figma
:pushpin: https://www.figma.com/file/ouMBsDsGoVcC8MlF3sSfUe/Chinese-Vocab?type=design&node-id=447-2&mode=design&t=dysgwZV8f9IPJGAg-0 
