!(function e(t, s, a) {
  function o(n, r) {
    if (!s[n]) {
      if (!t[n]) {
        var c = "function" == typeof require && require;
        if (!r && c) return c(n, !0);
        if (i) return i(n, !0);
        var l = new Error("Cannot find module '" + n + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var d = (s[n] = { exports: {} });
      t[n][0].call(
        d.exports,
        function (e) {
          var s = t[n][1][e];
          return o(s ? s : e);
        },
        d,
        d.exports,
        e,
        t,
        s,
        a
      );
    }
    return s[n].exports;
  }
  for (
    var i = "function" == typeof require && require, n = 0;
    n < a.length;
    n++
  )
    o(a[n]);
  return o;
})(
  {
    1: [
      function (e, t, s) {
        "use strict";
        Object.defineProperty(s, "__esModule", { value: !0 });
        var a = {
          NYT: '\n  <dd property="schema:citation" typeof="schema:ScholarlyArticle"\n      resource="http://www.scribd.com/doc/224608514/The-Full-New-York-Times-Innovation-Report">\n    <cite property="schema:name"><a href="http://www.scribd.com/doc/224608514/The-Full-New-York-Times-Innovation-Report">The\n      Full New York Times Innovation Report</a></cite>,\n    by\n    <span property="schema:author" typeof="schema:Person">\n      <span property="schema:name">New York Times</span>\n    </span>;\n    <time property="schema:datePublished" datetime="2014-03" datatype="xsd:gYearMonth">2014 Mar</time>.\n  </dd>\n  ',
          HTML: '\n  <dd property="schema:citation" typeof="schema:WebPage"\n      resource="http://www.w3.org/TR/html5/">\n    <cite property="schema:name"><a href="http://www.w3.org/TR/html5/">One of the HTML\n    Specifications</a></cite>.\n  </dd>\n  ',
          "WAI-ARIA":
            '\n  <dd property="schema:citation" typeof="schema:WebPage"\n      resource="https://www.w3.org/TR/wai-aria/complete">\n    <cite property="schema:name"><a href="https://www.w3.org/TR/wai-aria/complete">Accessible Rich\n    Internet Applications (WAI-ARIA) 1.0</a></cite>.\n  </dd>\n  ',
          "DPUB-ARIA":
            '\n  <dd property="schema:citation" typeof="schema:WebPage"\n      resource="http://w3c.github.io/aria/aria/dpub.html">\n    <cite property="schema:name"><a href="http://w3c.github.io/aria/aria/dpub.html">Digital\n    Publishing WAI-ARIA Module 1.0</a></cite>.\n  </dd>\n  ',
          RDFa: '\n  <dd property="schema:citation" typeof="schema:WebPage"\n      resource="https://www.w3.org/TR/rdfa-primer/">\n    <cite property="schema:name"><a href="https://www.w3.org/TR/rdfa-primer/">RDFa 1.1\n    Primer</a></cite>.\n  </dd>\n  ',
          "schema.org":
            '\n  <dd property="schema:citation" typeof="schema:WebPage"\n      resource="http://schema.org/">\n    <cite property="schema:name"><a href="http://schema.org/">schema.org</a></cite>.\n  </dd>\n  ',
          CSL: '\n  <dd property="schema:citation" typeof="schema:WebPage"\n      resource="http://citationstyles.org/">\n    <cite property="schema:name"><a href="http://citationstyles.org/">Citation Styles\n    Language</a></cite>.\n  </dd>\n  ',
        };
        s["default"] = a;
      },
      {},
    ],
    2: [
      function (e, t, s) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o() {
          Array.from(document.querySelectorAll("section")).forEach(function (
            e
          ) {
            var t = i(e),
              s = e.firstElementChild,
              a = "h" + (t > 6 ? 6 : t);
            if (s.localName !== a) {
              for (var o = document.createElement(a); s.hasChildNodes(); )
                o.appendChild(s.firstChild);
              for (var n = 0; n < s.attributes.length; n++)
                o.setAttribute(s.attributes[n].name, s.attributes[n].value);
              e.replaceChild(o, s), (s = o);
            }
            t > 6 && s.setAttribute("aria-level", t);
          });
          var e = r(document.body, [0]),
            t = document.querySelector('div[role="contentinfo"]');
          t.insertBefore(e, t.firstChild);
        }
        function i(e) {
          for (var t = 2, s = e.parentNode; s; )
            "section" === s.localName && t++, (s = s.parentNode);
          return t;
        }
        function n(e, t) {
          for (var s = [], a = e.firstElementChild; a; )
            a.localName === t && s.push(a), (a = a.nextElementSibling);
          return s;
        }
        function r(e, t) {
          var s = n(e, "section");
          if (0 === s.length) return null;
          var a = document.createElement("ol");
          return (
            a.setAttribute("role", "directory"),
            s.forEach(function (e) {
              var s = e.firstElementChild;
              if (s && /^h[2-6]$/.test(s.localName)) {
                var o = e.id;
                if (o) {
                  t[t.length - 1]++;
                  var i = t.slice(),
                    n = i.join("."),
                    c = 1 === i.length;
                  c && (n += ".");
                  var l = document.createElement("span");
                  (l.textContent = n + " "), s.insertBefore(l, s.firstChild);
                  var d = document.createElement("a");
                  d.href = "#" + o;
                  for (var u = l; u; )
                    d.appendChild(u.cloneNode(!0)), (u = u.nextSibling);
                  var p = document.createElement("li");
                  p.appendChild(d), a.appendChild(p), t.push(0);
                  var m = r(e, t);
                  m && p.appendChild(m), t.pop();
                }
              }
            }),
            a
          );
        }
        function c() {
          var e = document.createElement("dl"),
            t = {};
          Array.from(
            document.querySelectorAll('a[role="doc-biblioref"]')
          ).forEach(function (s) {
            var a = s.textContent;
            if (!h["default"][a]) return console.error("No ref: " + a);
            if (((s.href = "#ref-" + a), !t[a])) {
              t[a] = !0;
              var o = document.createElement("dt");
              (o.id = "ref-" + a), (o.textContent = a), e.appendChild(o);
              var i = document.createElement("div");
              (i.innerHTML = h["default"][a]),
                e.appendChild(i.firstElementChild);
            }
          });
          var s = document.createElement("section"),
            a = document.createElement("h2");
          (s.id = "biblio-references"),
            (a.textContent = "References"),
            s.appendChild(a),
            s.appendChild(e),
            document.body.appendChild(s);
        }
        function l() {}
        function d() {
          Array.from(document.querySelectorAll("a:not([href])")).forEach(
            function (e) {
              var t = e.textContent.split(":");
              if (2 === t.length) {
                var s = f[t[0]];
                s &&
                  (e.setAttribute("href", "" + s + t[1]),
                  e.setAttribute("class", "onto"));
              }
            }
          );
        }
        function u() {
          c(), o(), l(), d();
        }
        var p = e("@scienceai/scholarly-article"),
          m = (a(p), e("./refs")),
          h = a(m),
          f = { schema: "http://schema.org/", sa: "http://ns.science.ai/#" };
        "complete" === document.readyState
          ? u()
          : document.addEventListener("DOMContentLoaded", u, !1);
      },
      { "./refs": 1, "@scienceai/scholarly-article": 3 },
    ],
    3: [
      function (e, t, s) {
        t.exports = e("./scholarly-article.json");
      },
      { "./scholarly-article.json": 4 },
    ],
    4: [
      function (e, t, s) {
        t.exports = {
          "@context": {
            sa: "http://ns.science.ai#",
            rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            rdfs: "http://www.w3.org/2000/01/rdf-schema#",
            owl: "http://www.w3.org/2002/07/owl#",
            vs: "http://www.w3.org/2003/06/sw-vocab-status/ns#",
            xsd: "http://www.w3.org/2001/XMLSchema#",
            bibo: "http://purl.org/ontology/bibo/",
            skos: "http://www.w3.org/2004/02/skos/core#",
            dc: "http://purl.org/dc/terms/",
            schema: "http://schema.org/",
            oa: "http://www.w3.org/ns/oa#",
            sameAs: { "@id": "owl:sameAs", "@type": "@id" },
            seeAlso: { "@id": "rdfs:seeAlso", "@type": "@id" },
            equivalentClass: { "@id": "owl:equivalentClass", "@type": "@id" },
            equivalentProperty: {
              "@id": "owl:equivalentProperty",
              "@type": "@id",
            },
            domain: { "@id": "rdfs:domain", "@type": "@id" },
            range: { "@id": "rdfs:range", "@type": "@id" },
            subClassOf: {
              "@id": "rdfs:subClassOf",
              "@type": "@id",
              "@container": "@set",
            },
            disjointWith: {
              "@id": "owl:disjointWith",
              "@type": "@id",
              "@container": "@set",
            },
            unionOf: {
              "@id": "owl:unionOf",
              "@type": "@id",
              "@container": "@set",
            },
            comment: "rdfs:comment",
            label: "rdfs:label",
            altLabel: "skos:altLabel",
            status: "vs:term_status",
            source: { "@id": "dc:source", "@type": "@id" },
            defines: { "@reverse": "rdfs:isDefinedBy", "@type": "@id" },
          },
          "@id": "https://ns.science.ai/",
          defines: [
            {
              "@id": "sa:Unspecified",
              "@type": "rdfs:Class",
              label: "Unspecified",
              comment: "A section that is unknown or otherwise unspecified.",
              subClassOf: [],
              disjointWith: [
                "sa:Abstract",
                "sa:Introduction",
                "sa:MaterialsAndMethods",
                "sa:Results",
                "sa:Discussion",
                "sa:Conclusion",
                "sa:Acknowledgements",
                "sa:ReferenceList",
                "sa:Reference",
                "sa:Formula",
                "sa:Image",
                "sa:Video",
                "sa:Audio",
                "schema:Table",
                "sa:Funding",
                "sa:Disclosure",
                "sa:SupportingInformation",
                "sa:Authors",
                "sa:Contributors",
                "sa:Affiliations",
                "sa:Abbreviations",
                "sa:Keywords",
                "sa:Copyright",
              ],
              status: "testing",
            },
            {
              "@id": "sa:Abstract",
              "@type": "rdfs:Class",
              label: "Abstract",
              comment:
                "A brief summary of a book, a research article, thesis, review, conference proceeding or any in-depth analysis of a particular subject or discipline, the purpose of which is to help the reader quickly ascertain the publication's purpose.",
              subClassOf: ["schema:CreativeWork"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Authors",
              "@type": "rdfs:Class",
              label: "Authors",
              altLabel: ["Author"],
              comment:
                "A list of items each denoting an author of a particular publication.",
              subClassOf: ["http://purl.org/spar/doco/ListOfAuthors"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Contributors",
              "@type": "rdfs:Class",
              label: "Contributors",
              altLabel: ["Contributor"],
              comment:
                "A list of items, each denoting a contributor to a publication where such contributions are insufficient to warrant classification as author.",
              subClassOf: ["http://purl.org/spar/doco/ListOfContributors"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Affiliations",
              "@type": "rdfs:Class",
              label: "Affiliations",
              altLabel: ["Affiliation"],
              comment:
                "A list of affiliations for the authors and contributors.",
              subClassOf: ["http://purl.org/spar/doco/ListOfOrganizations"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Introduction",
              "@type": "rdfs:Class",
              label: "Introduction",
              sameAs: "http://purl.org/spar/deo/Introduction",
              comment:
                "An initial description which states the purpose and goals of the following writing, and, in the case of journal articles, typically includes background information on the research topic and a review of related work in the area.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:MaterialsAndMethods",
              "@type": "rdfs:Class",
              label: "MaterialsAndMethods",
              altLabel: ["Materials And Methods", "Materials", "Methods"],
              unionOf: [
                "http://purl.org/spar/deo/Materials",
                "http://purl.org/spar/deo/Methods",
              ],
              comment:
                "A description in a research paper documenting the specialized materials and/or methods used in the work described. This description is contained in a section often entitled 'Methods and Materials', 'Experimental' or a related term.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Results",
              "@type": "rdfs:Class",
              label: "Results",
              sameAs: "http://purl.org/spar/deo/Results",
              comment:
                "The report of the specific findings of an investigation, given without discussion or conclusion being drawn.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Discussion",
              "@type": "rdfs:Class",
              label: "Discussion",
              comment:
                "An interpretation and discussion of the results obtained and an analysis of their significance, in support of conclusions. These conclusions may be part of this discussion or may be included in a separate section of the document.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Conclusion",
              "@type": "rdfs:Class",
              label: "Conclusion",
              comment:
                "A reflection on the preceding text, summarizing the evidence, arguments or premises presented in the document and their logical outcomes. Conclusions are a fundamental feature in academic research publications, and may be included in the Discussion section.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Acknowledgements",
              "@type": "rdfs:Class",
              label: "Acknowledgements",
              sameAs: "http://purl.org/spar/deo/Acknowledgements",
              comment:
                "Usually part of the preface, or a separate section in its own right, often as part of the back matter, it acknowledges those, including funding agencies, who contributed to the undertaking of a research project described in a publication, or to the creation of the work in some way. In scientific articles, the acknowledgements are usually placed as a separated section immediately following the Discussion or Conclusions.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Abbreviations",
              "@type": "rdfs:Class",
              label: "Abbreviations",
              sameAs: "http://purl.org/spar/doco/Glossary",
              comment:
                "A set of definitions for abbreviations used in the document.",
              subClassOf: ["http://purl.org/spar/doco/Section"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Copyright",
              "@type": "rdfs:Class",
              label: "Copyright",
              comment:
                "A section containing a copyright mention for the document.",
              subClassOf: ["http://purl.org/spar/doco/Section"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Disclosure",
              "@type": "rdfs:Class",
              label: "Disclosure",
              altLabel: ["Conflict of Interest", "Competing Interest"],
              comment:
                "A section containing acknowledgment of facts that interfere with or could reasonably be perceived as interfering with the full and objective presentation, peer review, editorial decision-making, or publication of research",
              subClassOf: ["schema:CreativeWork"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Funding",
              "@type": "rdfs:Class",
              label: "Funding",
              comment:
                "Person or Organization that funded the research on which a work was based.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Keywords",
              "@type": "rdfs:Class",
              label: "Keywords",
              comment:
                "A section containing a list of keywords as part of the document's metadata.",
              subClassOf: ["http://purl.org/spar/doco/Section"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:SupportingInformation",
              "@type": "rdfs:Class",
              label: "SupportingInformation",
              altLabel: "Supporting Information",
              sameAs: "http://purl.org/spar/doco/Appendix",
              altLabel: [
                "supplementary material",
                "supplementary files",
                "additional files",
                "additional information",
                "additional material",
                "appendix",
                "supplemental information",
                "supplemental material",
                "supplementary appendix",
                "supplementary data",
              ],
              comment:
                "Any information either auxiliary to the main content of the creative work or required to reproduce or verify the results of the creative work",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:ReferenceList",
              "@type": "rdfs:Class",
              label: "ReferenceList",
              altLabel: [
                "References",
                "Literature",
                "Bibliography",
                "Works Cited",
                "Citations",
              ],
              sameAs: "http://purl.org/spar/doco/ListOfReferences",
              comment:
                "A list of items each representing a reference to a specific part of the same document, or to another publication.",
              subClassOf: ["http://purl.org/spar/doco/List"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Reference",
              "@type": "rdfs:Class",
              label: "Reference",
              altLabel: ["Citation"],
              sameAs: "http://purl.org/spar/deo/Reference",
              comment:
                "A reference to a specific part of the document, or to another publication.",
              subClassOf: ["http://purl.org/spar/deo/DiscourseElement"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Formula",
              "@type": "rdfs:Class",
              label: "Formula",
              altLabel: ["Equation"],
              sameAs: "http://purl.org/spar/doco/Formula",
              comment:
                "A unit of information expressed in mathematical, chemical or logical symbols and language.",
              subClassOf: [
                "http://purl.org/spar/deo/DiscourseElement",
                "schema:CreativeWork",
              ],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:FormulaObject",
              "@type": "rdfs:Class",
              label: "FormulaObject",
              altLabel: "Formula Object",
              sameAs: "http://purl.org/spar/doco/FormulaBox",
              comment: "A formula object embedded in a web page",
              subClassOf: [
                "http://purl.org/spar/deo/DiscourseElement",
                "schema:MediaObject",
              ],
              status: "testing",
            },
            {
              "@id": "sa:SoftwareSourceCodeObject",
              "@type": "rdfs:Class",
              label: "SoftwareSourceCodeObject",
              altLabel: "Software Source Code Object",
              sameAs: "http://purl.org/spar/doco/FormulaBox",
              comment: "A source code object embedded in a web page",
              subClassOf: ["schema:MediaObject"],
              status: "testing",
            },
            {
              "@id": "sa:Image",
              "@type": "rdfs:Class",
              label: "Image",
              sameAs: "http://purl.org/spar/doco/Figure",
              comment: "An image resource",
              subClassOf: ["schema:CreativeWork"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Video",
              "@type": "rdfs:Class",
              label: "Video",
              comment: "A video resource",
              subClassOf: ["schema:CreativeWork"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:Audio",
              "@type": "rdfs:Class",
              label: "Audio",
              comment: "An audio resource",
              subClassOf: ["schema:CreativeWork"],
              disjointWith: ["sa:Unspecified"],
              status: "testing",
            },
            {
              "@id": "sa:TableObject",
              "@type": "rdfs:Class",
              sameAs: "http://purl.org/spar/doco/TableBox",
              label: "TableObject",
              altLabel: "Table Object",
              comment: "A table object embedded in a web page",
              subClassOf: ["schema:MediaObject"],
              status: "testing",
            },
            {
              "@id": "sa:DocumentObject",
              "@type": "rdfs:Class",
              label: "DocumentObject",
              altLabel: "Document Object",
              comment:
                "The most generic type for creative work encodings that are documents (HTML, LaTEX, DOCX, etc.)",
              subClassOf: ["schema:MediaObject"],
              status: "testing",
            },
            {
              "@id": "sa:Checksum",
              "@type": "rdfs:Class",
              label: "Checksum",
              subClassOf: "schema:Intangible",
              comment:
                "A small-size datum from an arbitrary block of digital data for the purpose of detecting errors which may have been introduced during its transmission or storage.",
              status: "testing",
              seeAlso: "http://en.wikipedia.org/wiki/Checksum",
              equivalenClass:
                "http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#FileHash",
            },
            {
              "@id": "sa:PerceptualHash",
              "@type": "rdfs:Class",
              subClassOf: "sa:Checksum",
              label: "PerceptualHash",
              altLabel: ["Perceptual Hash", "pHash"],
              comment:
                "A fingerprint of a multimedia file derived from various features from its content. Unlike cryptographic hash functions which rely on the avalanche effect of small changes in input leading to drastic changes in the output, perceptual hashes are close to one another if the features are similar and are resiliant to transformations such as rotation, skew, contrast adjustment and different compression/formats.",
              status: "testing",
              seeAlso: "https://en.wikipedia.org/wiki/Perceptual_hashing",
            },
            {
              "@id": "sa:contentChecksum",
              "@type": "rdf:Property",
              label: "contentChecksum",
              comment: "The checksum of a resource.",
              altLabel: "content checksum",
              range: "sa:Checksum",
              domain: "schema:CreativeWork",
              status: "testing",
              seeAlso: "http://en.wikipedia.org/wiki/Checksum",
              equivalentProperty:
                "http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#hasHash",
            },
            {
              "@id": "sa:checksumAlgorithm",
              "@type": "rdf:Property",
              label: "checksumAlgorithm",
              altLabel: "checksum algorithm",
              comment:
                "Name of the algorithm used to compute the checksum value. Examples might include MD5, SHA-1 etc.",
              range: "xsd:string",
              domain: "sa:Checksum",
              status: "testing",
              seeAlso: "http://en.wikipedia.org/wiki/Checksum",
              equivalentProperty:
                "http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#hashAlgorithm",
            },
            {
              "@id": "sa:checksumValue",
              "@type": "rdf:Property",
              label: "checksumValue",
              altLabel: ["checksum", "hash"],
              comment:
                "The actual value of the hash in base64 if no datatype are present.",
              range: "xsd:string",
              domain: "sa:Checksum",
              status: "testing",
              seeAlso: "http://en.wikipedia.org/wiki/Checksum",
              equivalentProperty:
                "http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#hashValue",
            },
            {
              "@id": "sa:progress",
              "@type": "rdf:Property",
              label: "progress",
              comment: "A quantitative measure of the progress of an event",
              range: "schema:QuantitativeValue",
              domain: "schema:Event",
              status: "testing",
            },
            {
              "@id": "sa:AccessControl",
              "@type": "rdfs:Class",
              label: "AccessControl",
              altLabel: ["access control"],
              subClassOf: "schema:Intangible",
              comment:
                "Defines the permissions granted to an agent to access a resource",
              status: "testing",
              seeAlso: "https://en.wikipedia.org/wiki/Access_control",
              equivalenClass: "http://www.w3.org/ns/auth/acl#accessControl",
            },
            {
              "@id": "sa:doi",
              "@type": "rdf:Property",
              label: "doi",
              comment: "A digital object identifier (DOI) for the resource.",
              range: "schema:URL",
              domain: "schema:CreativeWork",
              status: "testing",
              seeAlso:
                "https://en.wikipedia.org/wiki/Digital_object_identifier",
              equivalentProperty: "bibo:doi",
            },
            {
              "@id": "sa:selector",
              "@type": "rdf:Property",
              label: "selector",
              comment:
                "A selector identifying the location of of a web resource where this thing is refered",
              range: "sa:WebVerse",
              domain: "sa:TargetRole",
              status: "testing",
              seeAlso: "https://github.com/scienceai/web-verse",
              equivalentProperty: "oa:hasSelector",
            },
            {
              "@id": "sa:WebVerse",
              "@type": "rdfs:Class",
              label: "WebVerse",
              altLabel: "Webverse",
              comment:
                "A type of selector reasonably resilient to markup modifications and edits of the content",
              subClassOf: ["schema:Intangible"],
              equivalentClass: "oa:selector",
              seeAlso: "https://github.com/scienceai/web-verse",
              status: "testing",
            },
            {
              "@id": "sa:webVerseKey",
              "@type": "rdf:Property",
              label: "webVerseKey",
              altLabel: "web verse key",
              comment: "The key of a web verse selector",
              range: "schema:Text",
              domain: "sa:WebVerse",
              seeAlso: "https://github.com/scienceai/web-verse",
              status: "testing",
            },
            {
              "@id": "sa:webVerseHash",
              "@type": "rdf:Property",
              label: "webVerseHash",
              altLabel: "web verse hash",
              comment: "The hash of a web verse selector",
              range: "schema:Text",
              domain: "sa:WebVerse",
              seeAlso: "https://github.com/scienceai/web-verse",
              status: "testing",
            },
            {
              "@id": "sa:webVerseId",
              "@type": "rdf:Property",
              label: "webVerseId",
              altLabel: "web verse id",
              comment: "The identifier of a web verse selector",
              range: "schema:Text",
              domain: "sa:WebVerse",
              seeAlso: "https://github.com/scienceai/web-verse",
              status: "testing",
            },
            {
              "@id": "sa:startOffset",
              "@type": "rdf:Property",
              label: "startOffset",
              altLabel: "start offset",
              comment: "A number representing where a range selection starts",
              range: "schema:Number",
              domain: "sa:WebVerse",
              seeAlso: "https://github.com/scienceai/web-verse",
              status: "testing",
            },
            {
              "@id": "sa:endOffset",
              "@type": "rdf:Property",
              label: "endOffset",
              altLabel: "end offset",
              comment: "A number representing where a range selection ends",
              range: "schema:Number",
              domain: "sa:WebVerse",
              seeAlso: "https://github.com/scienceai/web-verse",
              status: "testing",
            },
            {
              "@id": "sa:TargetRole",
              "@type": "rdfs:Class",
              label: "TargetRole",
              altLabel: "Target Role",
              comment:
                "A subclass of Role allowing to specify specific selections of a target resource",
              subClassOf: ["schema:Role"],
              status: "testing",
            },
            {
              "@id": "sa:AnnotationAction",
              "@type": "rdfs:Class",
              label: "AnnotationAction",
              altLabel: "Annotation Action",
              comment: "The act of annotating an object",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:annotationBody",
              "@type": "rdf:Property",
              label: "annotationBody",
              altLabel: "annotation body",
              comment: "The body of an annotation",
              range: "schema:Thing",
              domain: "sa:AnnotationAction",
              equivalentProperty: "oa:hasBody",
              status: "testing",
            },
            {
              "@id": "sa:LinkAction",
              "@type": "rdfs:Class",
              label: "LinkAction",
              altLabel: "Link Action",
              comment:
                "The act of annotating an object with the motivation of linking it",
              subClassOf: ["sa:AnnotationAction"],
              status: "testing",
            },
            {
              "@id": "sa:TagAction",
              "@type": "rdfs:Class",
              label: "TagAction",
              altLabel: "Tag Action",
              comment:
                "The act of annotating an object with the motivation of taging it",
              subClassOf: ["sa:AnnotationAction"],
              status: "testing",
            },
            {
              "@id": "sa:ClassifyAction",
              "@type": "rdfs:Class",
              label: "ClassifyAction",
              altLabel: "Classify Action",
              comment:
                "The act of annotating an object with the motivation of classifying it",
              subClassOf: ["sa:AnnotationAction"],
              status: "testing",
            },
            {
              "@id": "sa:Project",
              "@type": "rdfs:Class",
              label: "Project",
              comment: "A project (a collective endeavour of some kind)",
              subClassOf: ["schema:CreativeWork"],
              equivalentClass: "http://xmlns.com/foaf/spec/#term_Project",
              status: "testing",
            },
            {
              "@id": "sa:ContributorRole",
              "@type": "rdfs:Class",
              label: "ContributorRole",
              altLabel: "Contributor Role",
              comment: "A subclass of Role used to describe contributor roles.",
              subClassOf: ["schema:Role"],
              source:
                "https://github.com/scienceai/scholarly.vernacular.io/issues/32",
              status: "testing",
            },
            {
              "@id": "sa:roleAffiliation",
              "@type": "rdf:Property",
              label: "roleAffiliation",
              altLabel: "role affiliation",
              comment: "The affiliation under which the role was performed.",
              range: "schema:Organization",
              domain: "sa:AuthoringRole",
              source:
                "https://github.com/scienceai/scholarly.vernacular.io/issues/32",
              status: "testing",
            },
            {
              "@id": "sa:roleContactPoint",
              "@type": "rdf:Property",
              label: "roleContactPoint",
              altLabel: "role contact point",
              comment:
                "A contact point for the person or organization behind an authoring role.",
              range: "schema:ContactPoint",
              domain: "sa:AuthoringRole",
              source:
                "https://github.com/scienceai/scholarly.vernacular.io/issues/32",
              status: "testing",
            },
            {
              "@id": "sa:SponsorRole",
              "@type": "rdfs:Class",
              label: "SponsorRole",
              altLabel: "Sponsor Role",
              comment: "A subclass of Role used to describe sponsoring roles.",
              subClassOf: ["schema:Role"],
              source:
                "https://github.com/scienceai/scholarly-article/issues/16",
              status: "testing",
            },
            {
              "@id": "sa:roleOffer",
              "@type": "rdf:Property",
              label: "roleOffer",
              altLabel: "role offer",
              comment: "An offer made by the role's sponsor.",
              range: "schema:Offer",
              domain: "sa:SponsorRole",
              source:
                "https://github.com/scienceai/scholarly-article/issues/16",
              status: "testing",
            },
            {
              "@id": "sa:FundingSource",
              "@type": "rdfs:Class",
              label: "FundingSource",
              altLabel: "Funding Source",
              comment: "The most generic type of funding source",
              subClassOf: ["schema:Offer"],
              source:
                "https://github.com/scienceai/scholarly-article/issues/16",
              status: "testing",
            },
            {
              "@id": "sa:roleAction",
              "@type": "rdf:Property",
              label: "roleAction",
              altLabel: "role action",
              comment:
                "Indicates an action in which the role acts as an 'agent'.",
              range: "schema:Action",
              domain: "sa:ContributorRole",
              source:
                "https://github.com/scienceai/scholarly-article/issues/20",
              status: "testing",
            },
            {
              "@id": "sa:DisclosureAction",
              "@type": "rdfs:Class",
              label: "DisclosureAction",
              altLabel: "Disclosure Action",
              comment: "The act of making a disclosure.",
              subClassOf: ["schema:InformAction"],
              source:
                "https://github.com/scienceai/scholarly-article/issues/20",
              status: "testing",
            },
            {
              "@id": "sa:AcknowledgeAction",
              "@type": "rdfs:Class",
              label: "AcknowledgeAction",
              altLabel: "Acknowledge Action",
              comment:
                "The act of acknowledging someone, with no expectation of a response.",
              subClassOf: ["schema:CommunicateAction"],
              source:
                "https://github.com/scienceai/scholarly-article/issues/20",
              status: "testing",
            },
            {
              "@id": "sa:UploadAction",
              "@type": "rdfs:Class",
              label: "UploadAction",
              altLabel: "Upload Action",
              comment:
                "The act of uploading an object to an entry point within some Web-based protocol.",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:CreateProjectAction",
              "@type": "rdfs:Class",
              label: "CreateProjectAction",
              altLabel: "Create Project Action",
              comment: "The act of creating a project.",
              subClassOf: ["schema:CreateAction"],
              status: "testing",
            },
            {
              "@id": "sa:UpdateProjectAction",
              "@type": "rdfs:Class",
              label: "UpdateProjectAction",
              altLabel: "Update Project Action",
              comment: "The act of updating a project.",
              subClassOf: ["schema:UpdateAction"],
              status: "testing",
            },
            {
              "@id": "sa:CreateProfileAction",
              "@type": "rdfs:Class",
              label: "CreateProfileAction",
              altLabel: "Create Profile Action",
              comment: "The act of creating a profile.",
              subClassOf: ["schema:CreateAction"],
              status: "testing",
            },
            {
              "@id": "sa:UpdateProfileAction",
              "@type": "rdfs:Class",
              label: "UpdateProfileAction",
              altLabel: "Update Profile Action",
              comment: "The act of updating a profile.",
              subClassOf: ["schema:UpdateAction"],
              status: "testing",
            },
            {
              "@id": "sa:DeleteProjectAction",
              "@type": "rdfs:Class",
              label: "DeleteProjectAction",
              altLabel: "Delete Project Action",
              comment: "The act of deleting a project.",
              subClassOf: ["schema:DeleteAction"],
              status: "testing",
            },
            {
              "@id": "sa:CreateReleaseAction",
              "@type": "rdfs:Class",
              label: "CreateReleaseAction",
              altLabel: "Create Release Action",
              comment: "The act of creating a release (snapshot) of an object.",
              subClassOf: ["schema:CreateAction"],
              status: "testing",
            },
            {
              "@id": "sa:CreatePeriodicalAction",
              "@type": "rdfs:Class",
              label: "CreatePeriodicalAction",
              altLabel: "Create Periodical Action",
              comment: "The act of creating a periodical.",
              subClassOf: ["schema:CreateAction"],
              status: "testing",
            },
            {
              "@id": "sa:MimeDetectionAction",
              "@type": "rdfs:Class",
              label: "MimeDetectionAction",
              altLabel: "Mime Detection Action",
              comment: "The act of detecting the MIME type of an object.",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:ImageProcessingAction",
              "@type": "rdfs:Class",
              label: "ImageProcessingAction",
              altLabel: "Image Processing Action",
              comment:
                "The act of converting an image object to web first format and extracting metadata about the object.",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:AudioVideoProcessingAction",
              "@type": "rdfs:Class",
              label: "AudioVideoProcessingAction",
              altLabel: "Audio Video Processing Action",
              comment:
                "The act of converting an audio or video object to web first format and extracting metadata about the object.",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:RdfaConversionAction",
              "@type": "rdfs:Class",
              label: "RDFaConversionAction",
              altLabel: "RDFa Conversion Action",
              comment:
                "The act of converting an object to RDFa (HTML web document with rich structured data markup).",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:CsvwAction",
              "@type": "rdfs:Class",
              label: "CSVWAction",
              altLabel: "CSVW Action",
              comment:
                "The act of extracting metadata about a tabular object compatible with the W3C Model for Tabular Data and Metadata on the Web",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
            {
              "@id": "sa:SemanticTaggingAction",
              "@type": "rdfs:Class",
              label: "SemanticTaggingAction",
              altLabel: "Semantic Tagging Action",
              comment:
                "The act of extracting semantic tags provided by web ontologies (OWL) or vocabularies (RDF Schema) from an object.",
              subClassOf: ["schema:Action"],
              status: "testing",
            },
          ],
        };
      },
      {},
    ],
  },
  {},
  [2]
);
