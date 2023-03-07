import {match, hypocoristics} from "./index";

describe("index", () => {
  describe("match", () => {
    it("should return true when there is a match", () => {
      expect(match("Aaron", "Ronny", "en")).toBeTruthy();
    });

    it("should also work in reverse", () => {
      expect(match("Ginny", "Virginia", "en")).toBeTruthy();
    });

    it("should return false when there is no match", () => {
      expect(match("Candace", "Alex")).toBeFalsy();
    });

    it("throws if locale is not supported", () => {
      expect(() => {
        match("Aaron", "Ron", "vi");
      }).toThrow("Locale 'vi' not supported");
    });

    it("should set locale by default to `en` when unspecified", () => {
      expect(match("Aaron", "Ron", "")).toBeTruthy();
    });
  });
  describe("hypocoristics", () => {
    it("throws if locale is not supported", () => {
      expect(() => {
        hypocoristics("Rosabella", "it");
      }).toThrow("Locale 'it' not supported");
    });

    it("should set locale by default to `en` when unspecified", () => {
      expect(hypocoristics("Rosabella", "")).toBeDefined();
    });

    it("should return a list of shorten version if a full given name is specified", () => {
      expect(hypocoristics("Rosabella")).toEqual([
        "Rosable",
        "Belle",
        "Rosa",
        "Rose",
        "Roz",
        "Isabella",
        "Roseanne",
        "Rosarita",
        "Rosalyn"
      ]);
    });

    it("should return all possible matchings if a short name is given", () => {
      expect(hypocoristics("Alex")).toEqual([
        "Alastair",
        "Al",
        "Alex",
        "Ala",
        "Alexander",
        "Alex",
        "Lex",
        "Xander",
        "Sander",
        "Sandy",
        "Ander",
        "Alec",
        "Alexey",
        "Alexei",
        "AndE",
        "Ec",
        "SandE",
        "Al",
        "Eleck",
        "Sasha",
        "Alexandra",
        "Alex",
        "Ali",
        "Lee",
        "Lexi",
        "Sasha",
        "Sandra",
        "Xandra",
        "Alexandre",
        "Alex",
        "Lex",
        "Xander",
        "Sander",
        "Sandy",
        "Anderxie",
        "Alexandria",
        "Alla",
        "EllE",
        "Elic",
        "Sandra",
        "Alexandra",
        "Lexa",
        "Xan",
        "Alex",
        "SandE",
        "Sasha",
        "Cassandra",
        "Cass",
        "CassE"
      ]);
    });
  });
});
