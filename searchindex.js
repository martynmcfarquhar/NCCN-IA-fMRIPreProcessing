Search.setIndex({"docnames": ["0.intro", "1.fmri-structure", "2.motion", "3.slice-timing", "4.normalisation", "5.smoothing", "6.building-pipelines", "7.preprocessing-code", "8.summary-quiz"], "filenames": ["0.intro.ipynb", "1.fmri-structure.ipynb", "2.motion.ipynb", "3.slice-timing.ipynb", "4.normalisation.ipynb", "5.smoothing.ipynb", "6.building-pipelines.ipynb", "7.preprocessing-code.ipynb", "8.summary-quiz.ipynb"], "titles": ["Introduction", "The Structure of fMRI Data", "Step 1: Motion Correction", "Step 2: Slice-Timing", "Step 3: Normalisation", "Step 4: Smoothing", "Building the Preprocessing Pipeline", "Running Preprocessing Using MATLAB Code", "Summary and Quiz"], "terms": {"befor": [0, 1, 2], "we": [0, 1, 2], "get": [0, 1, 2], "start": 1, "discuss": [0, 1], "pre": [0, 2], "process": [0, 2], "us": [0, 1, 2, 8], "have": [0, 1, 2], "review": 1, "an": [1, 2], "In": [0, 1, 2], "thi": [0, 1, 2, 7], "lesson": [0, 1, 2], "ar": [0, 1, 2], "go": [0, 1, 2], "talk": 1, "lot": 1, "about": [0, 1, 2], "spatial": [1, 2], "tempor": 1, "element": 1, "dataset": [], "refer": [1, 2], "timeseri": 1, "so": [1, 2], "import": [1, 2], "you": [0, 1, 2, 7], "understand": 1, "what": [0, 1, 2], "meant": 1, "ani": [1, 2], "further": [1, 2], "At": [0, 1, 2], "its": [1, 2], "most": [1, 2], "basic": [1, 2], "collect": 1, "3d": 1, "volum": [1, 2], "brain": [1, 2], "were": [1, 2], "rapid": 1, "success": [1, 2], "speed": [1, 2], "which": [0, 1, 2], "given": 1, "tr": 1, "sequenc": [1, 2], "usual": [1, 2], "around": [1, 2], "2": [0, 1, 2], "3": [0, 1], "second": [1, 2], "give": 1, "resolut": 1, "togeth": [1, 2], "form": [1, 2], "where": [1, 2], "three": 1, "dimens": 1, "fourth": 1, "time": [0, 1, 2], "As": [1, 2], "move": [1, 2], "through": [0, 1], "see": [1, 2], "how": [0, 1], "bold": 1, "signal": 1, "chang": [1, 2], "over": [1, 2], "cours": [1, 2], "experi": 1, "importantli": [1, 2], "each": [0, 1, 2], "while": 1, "subject": [0, 1, 2], "engag": 1, "some": [0, 1, 2], "sort": 1, "cognit": 1, "task": 1, "scanner": [1, 2], "look": 1, "like": [1, 2], "them": [0, 1, 2], "focu": [1, 2], "experiment": 1, "design": 1, "optimis": [1, 2], "unit": 1, "For": [1, 2], "purpos": 1, "just": [1, 2], "know": [1, 2], "wa": [1, 2], "do": [0, 1, 2], "someth": 1, "our": [0, 1, 2], "broad": 1, "analys": [1, 2], "try": [1, 2], "match": [1, 2], "differ": [0, 1, 2], "condit": [1, 2], "make": [0, 1, 2], "up": 1, "can": [0, 1, 2, 7], "thought": 1, "snapshot": 1, "indic": 1, "valu": 1, "precis": 1, "moment": 1, "A": [1, 2], "typic": [1, 2], "scan": [1, 2], "mai": [1, 2], "amass": 1, "200": [1, 2], "voxel": [1, 2], "point": [1, 2], "shift": [1, 2], "across": [1, 2], "all": [0, 1, 2], "therefor": [1, 2, 7], "document": 1, "known": [0, 1, 2], "repres": [1, 2], "raw": [0, 1], "statist": [0, 1, 2], "analysi": [0, 1, 2], "discern": 1, "pattern": [1, 2], "map": 1, "now": [1, 2], "consid": [1, 2], "scale": [1, 2], "60": 1, "40": 1, "datapoint": 1, "28": 1, "million": 1, "singl": [1, 2], "exampl": 2, "below": [1, 2, 8], "section": 7, "advanc": 7, "materi": 7, "come": 7, "back": [2, 7], "later": [2, 7], "clear": 7, "flag": 7, "spm_realign": 7, "p": 7, "test": 8, "your": [1, 2, 8], "knowledg": 8, "content": 8, "step": [0, 1], "take": 0, "imag": [0, 2], "These": [0, 1], "consist": 0, "sever": [0, 2], "option": 0, "fmri": 0, "data": 0, "suitabl": 0, "shape": [0, 1], "major": 0, "perform": [0, 1, 2], "theori": 0, "when": [0, 2], "would": [0, 2], "thei": [0, 2], "implement": 0, "spm": [0, 1], "end": 0, "choic": 0, "need": [0, 2], "well": [0, 1], "provid": 0, "guidanc": 0, "scenario": 0, "The": [0, 2], "structur": 0, "1": [0, 1], "motion": [0, 1], "correct": 0, "slice": [0, 2], "normalis": [0, 1], "4": [0, 2], "smooth": [0, 2], "build": 0, "preprocess": 0, "pipelin": 0, "run": 0, "matlab": 0, "code": 0, "summari": 0, "quiz": 0, "illustr": [1, 2], "function": [1, 2], "associ": 1, "more": [1, 2], "feel": 1, "download": 1, "file": 1, "video": [1, 2], "show": [1, 2], "explor": 1, "facil": 1, "displai": 1, "seri": [1, 2], "movi": 1, "view": 1, "shown": [1, 2], "fig": [1, 2], "here": [1, 2], "techniqu": [1, 2], "readi": 1, "round": 1, "variou": 1, "issu": [1, 2], "unsuit": 1, "detail": 1, "examin": 1, "actual": [1, 2], "intuit": 1, "why": 1, "first": [1, 2], "gif": 1, "set": 1, "being": [1, 2], "scroll": 1, "anim": 1, "notic": 1, "characterist": 1, "flicker": 1, "occur": [1, 2], "compar": [1, 2], "other": [1, 2], "intens": [1, 2], "word": 1, "varianc": [1, 2], "degre": [1, 2], "inform": 1, "contain": [1, 2], "want": [1, 2], "caus": [1, 2], "unfortun": [1, 2], "mani": 1, "reason": 1, "than": [1, 2], "true": [1, 2], "hemodynam": 1, "could": [1, 2], "relat": [1, 2], "nois": 1, "from": [1, 2], "aspect": 1, "physiolog": 1, "connect": 1, "blood": 1, "flow": 1, "whatev": 1, "realli": [1, 2], "minimis": 1, "extent": [1, 2], "attribut": 1, "sourc": [1, 2], "manipul": 1, "part": [1, 2], "help": [1, 2], "clean": 1, "possibl": [1, 2], "everyth": 1, "els": 1, "beyond": 1, "addit": [1, 2], "also": [1, 2], "aim": 1, "address": 1, "fundament": [1, 2], "difficulti": 1, "multi": 1, "studi": 1, "name": 1, "everyon": 1, "s": [1, 2], "size": [1, 2], "anatom": 1, "variabl": 1, "substanti": 1, "localis": 1, "group": [1, 2], "unless": 1, "onli": [1, 2], "individu": [1, 2], "alreadi": 1, "principl": [1, 2], "neuroanatomi": 1, "idea": [1, 2], "same": [1, 2], "appli": 1, "instead": [1, 2], "space": [1, 2], "allow": [1, 2], "result": [1, 2], "anatomi": 1, "dive": 1, "standard": [1, 2], "housekeep": 1, "firstli": 1, "alwai": [1, 2], "better": 1, "work": 1, "copi": 1, "rather": 1, "origin": 1, "Not": 1, "doe": [1, 2], "easier": 1, "delet": 1, "problem": 1, "invis": 1, "header": 1, "remov": [1, 2], "again": [1, 2], "new": 1, "easiest": 1, "wai": [1, 2], "dure": [1, 2], "creat": [1, 2], "folder": 1, "keep": 1, "thing": 1, "organis": 1, "often": [1, 2], "insid": [1, 2], "next": [1, 2], "default": [1, 2], "registr": [1, 2], "between": [1, 2], "base": [1, 2], "algorithm": [1, 2], "rough": [1, 2], "manual": 1, "align": [1, 2], "anterior": 1, "commissur": 1, "adjust": 1, "bring": 1, "begin": [1, 2], "both": [1, 2], "demonstr": 1, "one": 2, "biggest": 2, "due": 2, "inevit": 2, "veri": 2, "difficult": 2, "stai": 2, "perfectli": 2, "still": 2, "5": 2, "10": 2, "minut": 2, "durat": 2, "case": 2, "particularli": 2, "bad": 2, "damag": 2, "cannot": 2, "even": 2, "seem": 2, "slight": 2, "head": 2, "posit": 2, "littl": 2, "3mm": 2, "seriou": 2, "qualiti": 2, "big": 2, "comparison": 2, "instanc": 2, "less": 2, "toler": 2, "environ": 2, "elderli": 2, "young": 2, "children": 2, "becaus": 2, "spuriou": 2, "activ": 2, "appear": 2, "misconstru": 2, "neuron": 2, "encourag": 2, "elimin": 2, "best": 2, "deal": 2, "howev": 2, "recognis": 2, "awar": 2, "fix": 2, "There": 2, "two": 2, "main": 2, "suddenli": 2, "disrupt": 2, "record": 2, "compound": 2, "specif": 2, "said": 2, "correl": [], "confound": 2, "longer": 2, "continu": 2, "measur": [], "depend": 2, "small": 2, "becom": 2, "problemat": 2, "tissu": 2, "boundari": 2, "outsid": 2, "ventricl": 2, "sudden": 2, "type": 2, "figur": [], "20": 2, "middl": 2, "been": 2, "artifici": 2, "width": 2, "left": 2, "edg": 2, "ha": 2, "highlight": 2, "extrem": 2, "easili": 2, "mistaken": 2, "after": 2, "One": 2, "save": 2, "grace": 2, "effect": 2, "sit": 2, "along": 2, "border": 2, "should": 2, "treat": 2, "caution": 2, "That": 2, "reli": 2, "artifact": 2, "visibl": 2, "subtl": 2, "mean": 2, "imperfect": 2, "limit": 2, "simpli": 2, "trust": 2, "thu": 2, "throw": 2, "awai": 2, "artefact": 2, "insidi": 2, "impact": 2, "proton": 2, "neighbour": 2, "excit": 2, "magnet": 2, "gradient": 2, "subsequ": 2, "reconstruct": 2, "accur": 2, "exacerb": 2, "inter": 2, "leav": 2, "acquisit": 2, "greater": 2, "describ": 2, "although": 2, "call": 2, "spin": 2, "histori": 2, "propos": 2, "e": 2, "g": 2, "friston": 2, "et": 2, "al": 2, "1996": 2, "common": 2, "residu": 2, "accommod": 2, "model": 2, "approach": 2, "remain": 2, "somewhat": 2, "unknown": 2, "ignor": 2, "stripe": 2, "6": 2, "top": 2, "row": 2, "interleav": 2, "bottom": 2, "sequenti": 2, "column": 2, "without": 2, "right": 2, "sure": 2, "check": 2, "visual": 2, "whether": 2, "If": 2, "unus": 2, "especi": 2, "happen": 2, "altern": 2, "easi": 2, "It": 2, "plausibl": 2, "frustrat": 2, "movement": 2, "insepar": 2, "messi": 2, "combin": 2, "To": 2, "matter": 2, "wors": 2, "attempt": 2, "separ": 2, "inescap": 2, "reach": 2, "conclus": 2, "high": 2, "noth": 2, "done": 2, "unreli": 2, "anoth": 2, "allevi": 2, "nor": 2, "complet": 2, "solut": 2, "realign": 2, "poldrack": 2, "mumford": 2, "nichol": 2, "2011": 2, "7": 2, "choos": 2, "act": 2, "stationari": 2, "think": 2, "perspect": 2, "special": 2, "mechan": 2, "dai": 2, "wait": 2, "comput": 2, "finish": 2, "least": 2, "squar": 2, "cost": 2, "shear": 2, "relev": 2, "final": 2, "estim": 2, "transform": 2, "converg": 2, "quickli": 2, "2005": 2, "Of": 2, "note": 2, "abl": 2, "larg": 2, "highli": 2, "tune": 2, "version": 2, "caveat": 2, "output": 2, "involv": 2, "matrix": 2, "t": 2, "target": 2, "translat": 2, "rotat": 2, "mathbf": 2, "matric": 2, "tell": 2, "much": [], "extract": 2, "plot": 2, "x": 2, "deviat": 2, "axi": 2, "produc": 2, "onc": 2, "turn": 2, "world": 2, "stage": 2, "bit": 2, "out": 2, "term": 2, "interpol": 2, "higher": 2, "order": 2, "b": 2, "spline": 2, "method": 2, "gener": 2, "prefer": 2, "evid": 2, "suggest": 2, "linear": 2, "introduc": 2, "error": 2, "ostuni": 2, "1997": 2, "highest": 2, "avail": 2, "gain": 2, "accuraci": 2, "undon": 2, "4th": 2, "compromis": 2, "too": [], "fact": 2, "decid": 2, "obviou": 2, "question": 2, "answer": 2, "mention": 2, "earlier": 2, "steadi": 2, "slow": 2, "tradit": 2, "accord": 2, "spike": 2, "concern": 2, "isotrop": 2, "5mm": 2, "y": 2, "z": 2, "plane": 2, "similar": 2, "calcul": 2, "angl": 2, "distanc": 2, "theta": 2, "d": 2, "frac": 2, "180": 2, "pi": 2, "r": 2, "radiu": 2, "circl": 2, "50mm": 2, "power": 2, "2012": 2, "72": 2, "50": 2, "circ": 2, "upon": 2, "coupl": 2, "recover": 2, "wherea": 2, "litter": 2, "almost": 2, "certainli": 2, "lost": 2, "trace": 2, "enough": 2, "rid": 2, "whole": 2, "spm12": 2, "pass": 2, "procedur": 2, "fine": 2, "realist": 2, "huge": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "The": 1, "structur": 1, "fmri": [1, 2], "data": [1, 2], "4d": 1, "imag": 1, "step": [2, 3, 4, 5], "1": 2, "motion": [2, 7], "correct": [2, 7], "2": 3, "slice": 3, "time": 3, "3": 4, "normalis": 4, "4": 5, "smooth": 5, "build": 6, "preprocess": [6, 7], "pipelin": 6, "run": 7, "us": 7, "matlab": 7, "code": 7, "summari": 8, "quiz": 8, "content": 0, "exampl": 1, "dataset": 1, "need": 1, "pre": 1, "process": 1, "preliminari": 1, "problem": 2, "corrupt": 2, "timeseri": 2, "measur": 2, "signal": 2, "correl": 2, "task": 2, "theori": 2, "paramet": 2, "resampl": 2, "how": 2, "much": 2, "too": 2, "spm": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})