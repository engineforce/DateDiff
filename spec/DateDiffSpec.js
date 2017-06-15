var dateDiff = require("../dateDiff");

describe("Date Diff", function () {
    it("Invalid inputs", function () {
        expect(() => {
            dateDiff(0, 1);
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("0", "1");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("01 01 1899", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("01 01 1800", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("01 21 1900", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("41 01 1900", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("41 02 1900", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("30 02 2008", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("-1 02 2008", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("30 02 2000", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("32 01 2000", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("32 03 2000", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("31 04 2000", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("32 08 2000", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("32 09 2000", "01 01 1900");
        }).toThrowError(/not a valid input/);

        expect(() => {
            dateDiff("01 01 1900", "32 09 2000");
        }).toThrowError(/not a valid input/);
    });

    it("Valid non leap year inputs", function () {
        expect(dateDiff("01 01 1900", "01 01 1900")).toBe(0);
        expect(dateDiff("01 01 1900", "01 02 1900")).toBe(31);        
        expect(dateDiff("01 01 1900", "01 03 1900")).toBe(59);
        expect(dateDiff("01 01 1900", "01 04 1900")).toBe(90);
        expect(dateDiff("01 01 1900", "01 05 1900")).toBe(120);
        expect(dateDiff("01 01 1900", "01 06 1900")).toBe(151);
        expect(dateDiff("01 01 1900", "01 07 1900")).toBe(181);
        expect(dateDiff("01 01 1900", "01 08 1900")).toBe(212);
        expect(dateDiff("01 01 1900", "01 09 1900")).toBe(243);
        expect(dateDiff("01 01 1900", "01 10 1900")).toBe(273);
        expect(dateDiff("01 01 1900", "01 11 1900")).toBe(304);
        expect(dateDiff("01 01 1900", "01 12 1900")).toBe(334);
        expect(dateDiff("01 01 1900", "01 01 1901")).toBe(365);
        expect(dateDiff("01 01 1900", "31 01 1900")).toBe(30);
        expect(dateDiff("01 01 1900", "28 02 1900")).toBe(58);        
        expect(dateDiff("01 01 1900", "31 03 1900")).toBe(89);
        expect(dateDiff("01 01 1900", "30 04 1900")).toBe(119);
        expect(dateDiff("01 01 1900", "31 05 1900")).toBe(150);
        expect(dateDiff("01 01 1900", "30 06 1900")).toBe(180);
        expect(dateDiff("01 01 1900", "31 07 1900")).toBe(211);
        expect(dateDiff("01 01 1900", "31 08 1900")).toBe(242);
        expect(dateDiff("01 01 1900", "30 09 1900")).toBe(272);
        expect(dateDiff("01 01 1900", "31 10 1900")).toBe(303);
        expect(dateDiff("01 01 1900", "30 11 1900")).toBe(333);
        expect(dateDiff("01 01 1900", "31 12 1900")).toBe(364);
    });

    it("Valid leap year inputs", function () {
        expect(dateDiff("01 01 1908", "01 01 1908")).toBe(0);
        expect(dateDiff("01 01 1908", "01 02 1908")).toBe(31);        
        expect(dateDiff("01 01 1908", "01 03 1908")).toBe(60);
        expect(dateDiff("01 01 1908", "01 04 1908")).toBe(91);
        expect(dateDiff("01 01 1908", "01 05 1908")).toBe(121);
        expect(dateDiff("01 01 1908", "01 06 1908")).toBe(152);
        expect(dateDiff("01 01 1908", "01 07 1908")).toBe(182);
        expect(dateDiff("01 01 1908", "01 08 1908")).toBe(213);
        expect(dateDiff("01 01 1908", "01 09 1908")).toBe(244);
        expect(dateDiff("01 01 1908", "01 10 1908")).toBe(274);
        expect(dateDiff("01 01 1908", "01 11 1908")).toBe(305);
        expect(dateDiff("01 01 1908", "01 12 1908")).toBe(335);
        expect(dateDiff("01 01 1908", "01 01 1909")).toBe(366);
        expect(dateDiff("01 01 1908", "31 01 1908")).toBe(30);
        expect(dateDiff("01 01 1908", "29 02 1908")).toBe(59);        
        expect(dateDiff("01 01 1908", "31 03 1908")).toBe(90);
        expect(dateDiff("01 01 1908", "30 04 1908")).toBe(120);
        expect(dateDiff("01 01 1908", "31 05 1908")).toBe(151);
        expect(dateDiff("01 01 1908", "30 06 1908")).toBe(181);
        expect(dateDiff("01 01 1908", "31 07 1908")).toBe(212);
        expect(dateDiff("01 01 1908", "31 08 1908")).toBe(243);
        expect(dateDiff("01 01 1908", "30 09 1908")).toBe(273);
        expect(dateDiff("01 01 1908", "31 10 1908")).toBe(304);
        expect(dateDiff("01 01 1908", "30 11 1908")).toBe(334);
        expect(dateDiff("01 01 1908", "31 12 1908")).toBe(365);
    });

    it("Valid other inputs", function () {
        expect(dateDiff("01 02 1900", "01 03 1900")).toBe(28);
        expect(dateDiff("1 1 2012", "1 1 2013")).toBe(366);
        expect(dateDiff("1 1 2000", "15 6 2017")).toBe(6375);
        expect(dateDiff("1 1 1900", "15 6 2017")).toBe(42899);
        expect(dateDiff("1 1 1900", "31 12 3999")).toBe(767008);
    });
});