const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const surveyData = req.body;

        // console.log(surveyData);

        let mbtiRes = '';
        let mstiRes = '';

        // mbti 속성별 점수 카운트
        let BC = {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        };

        // msti 속성별 점수 카운트
        let SC = {
            S: 0, O: 0,
            T: 0, A: 0,
            D: 0, C: 0,
            P: 0, E: 0
        };

         Object.values(surveyData).forEach((Item,index) => {

           // mbti
           if (index <7){
               if(Item.value<3){
                   BC[Item.IfYes] += (Item.value %2) +1;
               }else if(Item.value ==3){ 
                   return;
               }else{
                   BC[Item.IfNo] +=(Item.value %2)+1;
               }
           }

           //msti 
           else if(index>=7){
               if(Item.value<3){
                   SC[Item.IfYes] +=(Item.value%2)+1;
               }else if(Item.value==3){
                  return;
                }else{
                    SC[Item.IfNo] +=(Item.value%2)+1;
                }
             }
         });

         mbtiRes+=BC['E'] >=BC['I']? 'E':'I';
         mbtiRes+=BC['S'] >=BC['N']? 'S':'N';
         mbtiRes+=BC['T'] >=BC['F']? 'T':'F';
         mbtiRes+=BC['J'] >=BC['P']? 'J':'P';

         mstiRes+=SC['S'] >=SC['O']? 'S':'O';
         mstiRes+=SC['T'] >=SC['A']? 'T':'A';
         mstiRes+=SC['D' ]>=SC ['C '] ?'D':'C';
        mstiRes+=SC['P']>=SC['E']?'P':'E';

         const result ={
             mbti:mbtiRes,
             msti:mstiRes
         };

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
