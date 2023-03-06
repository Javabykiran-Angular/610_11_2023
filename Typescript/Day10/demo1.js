//Json Object
//java script object notation
//Data is store key & value format
// {}
var jsonObj = {
    id: 9,
    "fname": 'Sumit',
    lname: 'Raokhande'
};
//To access json Object has 2 ways
//1 dot operator
//2 Square Operator
//1 dot operator
// console.log(`
//     --------Dot Operator----
//     ID          :: ${jsonObj.id}
//     First Name  :: ${jsonObj.fname}
//     Last Name   :: ${jsonObj.lname}
// `)
//2 Square Operator
// console.log(`
//     ------ Square Operator----------
//     ID          :: ${jsonObj["id"]}
//     First Name  :: ${jsonObj['fname']}
//     Last Name   :: ${jsonObj["lname"]}
// `);
//Array Of Object
var arrObj = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", 'March', 'Dec'],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 55
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'USA'
        },
        month: ["Feb", 'July', 'Nov'],
        result: [
            {
                subj: 'M1',
                marks: 45
            },
            {
                subj: 'M2',
                marks: 55
            },
            {
                subj: 'M3',
                marks: 65
            }
        ]
    },
    {
        id: 6,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["April", 'Aug', 'Oct'],
        result: [
            {
                subj: 'M1',
                marks: 50
            },
            {
                subj: 'M2',
                marks: 58
            },
            {
                subj: 'M3',
                marks: 75
            }
        ]
    }
];
// console.log(" ID  ::  "+arrObj[0].id);
// console.log(" First Name  ::  "+arrObj[0]["fname"]);
// console.log(" Lasyt name  ::  "+arrObj[0].lname);
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n        ID          :: ".concat(arrObj[i].id, "  \n        First Name  :: ").concat(arrObj[i].fname, "\n        Last name   :: ").concat(arrObj[i].lname, "\n        Country     :: ").concat(arrObj[i].country.cname, "\n        Month       :: ").concat(arrObj[i].month.join(' '), "\n        ---------Result---------------        \n    "));
    for (var j = 0; j < arrObj[i].result.length; j++) {
        console.log("\n                Subject   :: ".concat(arrObj[i].result[j].subj, "\n                Marks     :: ").concat(arrObj[i].result[j].marks, "\n        "));
    }
}
console.log(arrObj);
