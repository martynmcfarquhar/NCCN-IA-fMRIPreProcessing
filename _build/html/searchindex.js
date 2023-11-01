Search.setIndex({"docnames": ["0.intro", "1.fmri-structure", "2.motion", "3.slice-timing", "4.normalisation", "5.smoothing", "6.building-pipelines", "7.summary-quiz"], "filenames": ["0.intro.ipynb", "1.fmri-structure.ipynb", "2.motion.ipynb", "3.slice-timing.ipynb", "4.normalisation.ipynb", "5.smoothing.ipynb", "6.building-pipelines.ipynb", "7.summary-quiz.ipynb"], "titles": ["Introduction", "The Structure of fMRI Data", "Step 1: Motion Correction", "Step 2: Slice Timing Correction", "Step 3: Normalisation", "Step 4: Smoothing", "Building the Preprocessing Pipeline", "Summary and Quiz"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7], "lesson": [0, 1, 2, 3, 6, 7], "about": [0, 1, 2, 4, 7], "step": [0, 1, 6, 7], "us": [0, 1, 5, 7], "process": [0, 1, 2, 3, 5, 7], "fmri": [0, 3, 4, 6, 7], "data": [0, 3, 6, 7], "befor": [0, 1, 2, 3, 5, 6], "can": [0, 1, 2, 3, 4, 5, 7], "subject": [0, 1, 2, 4, 5, 6, 7], "statist": [0, 1, 2, 3, 5, 6, 7], "analysi": [0, 1, 2, 3, 5, 7], "collect": [0, 1, 3, 6], "ar": [0, 1, 2, 3, 4, 5, 6, 7], "known": [0, 1, 2, 3, 4, 5, 6], "preprocess": [0, 3, 4], "In": [0, 1, 2, 3, 4, 5, 6, 7], "we": [0, 1, 2, 3, 4, 5, 7], "discuss": [0, 1, 2, 3, 4, 5, 6], "all": [0, 1, 2, 3, 4, 5, 6, 7], "major": [0, 6], "review": [0, 1, 4, 5, 6], "theori": [0, 3, 5, 6], "each": [0, 1, 2, 3, 4, 6], "practic": [0, 3, 6], "implement": [0, 6], "within": [0, 1, 3, 6], "spm": [0, 1, 6, 7], "At": [0, 1, 2], "end": [0, 2, 3, 5, 6], "some": [0, 1, 2, 3, 4, 5, 6], "choic": [0, 6], "need": [0, 2, 3, 4, 5, 7], "made": 0, "when": [0, 1, 2, 3, 4, 5, 6], "build": [0, 3], "pipelin": [0, 3, 5], "your": [0, 6, 7], "own": [0, 6], "The": [0, 2, 4, 5, 6], "structur": [0, 2, 4, 6], "1": [0, 1, 3, 4], "motion": [0, 1, 3, 4, 5], "correct": [0, 4, 5], "2": [0, 1, 2, 4, 5], "slice": [0, 2, 4, 5], "time": [0, 1, 4, 5], "3": [0, 1, 3], "normalis": [0, 1, 5], "4": [0, 2], "smooth": [0, 2], "summari": 0, "quiz": 0, "get": [1, 4, 5, 6, 7], "start": [1, 2, 3, 6], "go": [1, 2, 3, 5, 6], "focuss": 1, "spatial": [1, 2, 4, 5], "tempor": [1, 3], "element": [1, 3, 4], "As": [1, 2, 3, 4, 5, 6], "import": [1, 2, 3, 4, 6], "you": [1, 2, 3, 5, 6, 7], "have": [1, 2, 3, 4, 5, 6, 7], "solid": [1, 6], "understand": [1, 2, 4, 6, 7], "featur": 1, "ani": [1, 2, 3, 4, 5, 6], "further": [1, 2, 3, 5, 6], "its": [1, 2, 3, 4], "most": [1, 2, 3, 4, 5], "basic": [1, 2, 3], "3d": 1, "volum": [1, 2, 3, 4, 6], "measur": [1, 3, 6], "rapid": 1, "success": [1, 6], "speed": [1, 2], "which": [1, 2, 3, 4, 5, 6], "given": [1, 2, 3, 4, 5], "tr": [1, 3, 6], "scan": [1, 2, 3, 4, 6], "sequenc": [1, 2, 3, 6], "A": [1, 2, 6], "typic": [1, 2, 3, 4, 5], "bold": [1, 2, 3], "second": [1, 2, 3], "tell": 1, "sampl": [1, 3, 6], "rate": [1, 3], "resolut": [1, 4, 5], "togeth": [1, 4, 6], "form": [1, 2, 4, 5], "consist": [1, 3, 5], "three": [1, 6], "dimens": [1, 5], "fourth": 1, "point": [1, 2, 3, 4, 5, 6], "therefor": [1, 2, 4, 5], "index": 1, "both": [1, 2, 4, 5, 6], "posit": [1, 2], "well": [1, 3, 6, 7], "wa": [1, 3, 4, 5, 6], "dure": [1, 2, 3, 4], "thought": 1, "snapshot": 1, "mai": [1, 2, 3, 4, 5, 6], "amass": 1, "around": 1, "200": 1, "For": [1, 2, 3, 4, 6, 7], "voxel": [1, 2, 3, 4, 5, 6], "would": [1, 2, 3, 6, 7], "valu": [1, 4, 6], "indic": [1, 2, 3, 4, 6], "how": [1, 3, 4, 6, 7], "signal": [1, 3, 4, 5], "chang": [1, 2, 3, 5, 6], "over": [1, 2, 6], "cours": [1, 4, 5, 6, 7], "experi": 1, "brain": [1, 2, 3, 4, 5, 6, 7], "seri": [1, 3], "shown": [1, 2, 3, 4, 5, 6], "fig": [1, 2, 3, 4, 5, 6], "repres": [1, 2, 3, 4, 6], "raw": [1, 6], "interest": [1, 5], "purpos": [1, 6], "brief": [1, 6], "aim": 1, "find": [1, 3, 5], "pattern": [1, 2, 5], "map": [1, 4], "experiment": [1, 2, 6, 7], "manipul": [1, 7], "region": [1, 2, 3, 5, 6], "where": [1, 2, 3, 4, 5, 6], "found": [1, 4, 6], "suggest": [1, 2, 6], "involv": [1, 2, 6], "area": [1, 5, 6], "task": 1, "design": [1, 6], "optimis": [1, 2, 6], "unit": 1, "later": [1, 2, 3, 4, 6, 7], "now": [1, 2, 3, 4, 5, 6, 7], "just": [1, 4, 5, 6], "consid": [1, 2, 4, 6], "scale": [1, 5], "60": 1, "40": 1, "give": [1, 2, 4, 5, 6], "28": 1, "million": 1, "singl": [1, 2, 3, 5, 6], "challeng": 1, "try": [1, 2, 3, 4, 6, 7], "make": [1, 2, 3, 4, 5, 6, 7], "sens": [1, 3, 4, 5, 6], "excess": 1, "illustr": [1, 2, 3, 4, 5], "function": [1, 2, 3, 6, 7], "associ": [1, 2], "timeseri": [1, 2, 6], "To": [1, 5], "more": [1, 2, 3, 4, 5], "download": [1, 2], "anatom": [1, 4], "file": [1, 6, 7], "video": [1, 2, 3, 4, 5, 6], "below": [1, 2, 3, 4, 5, 6, 7], "demonstr": [1, 2, 3, 4, 5, 6], "displai": 1, "facil": 1, "here": [1, 2, 4, 5, 6], "see": [1, 2, 3, 4, 5, 7], "movi": 1, "visualis": 1, "help": [1, 4, 5], "our": [1, 2, 4, 5, 6, 7], "examin": [1, 2, 3, 5], "also": [1, 2, 3, 4, 5, 6], "provid": [1, 4, 5, 6], "insight": [1, 5], "why": [1, 6, 7], "first": [1, 2, 3, 4], "gif": 1, "show": [1, 2, 3, 4, 5, 6], "anim": 1, "notic": [1, 3], "characterist": 1, "flicker": 1, "compar": [1, 2, 6], "other": [1, 2, 3, 4, 6], "intens": [1, 2, 4, 6], "word": 1, "varianc": [1, 2, 4], "fact": [1, 2, 5, 6], "hardli": 1, "surpis": 1, "howev": [1, 2, 3, 4, 5, 6], "thsi": 1, "notion": 1, "central": 1, "inform": [1, 3, 4, 5, 6], "contain": [1, 2, 4, 6], "fundament": 1, "want": [1, 4, 5, 6], "ideal": 1, "world": [1, 2], "result": [1, 2, 3, 4, 5, 6], "unfortun": [1, 2, 4, 5, 6], "realiti": 1, "mani": [1, 6], "reason": [1, 2, 3, 4, 5], "These": [1, 3, 4, 5], "could": [1, 2, 3, 4, 6], "relat": [1, 2, 3, 4], "nois": [1, 5], "from": [1, 2, 3, 4, 5, 6, 7], "scanner": [1, 2, 3], "aspect": 1, "physiolog": 1, "connect": [1, 5], "blood": 1, "flow": [1, 6], "whatev": 1, "conceptualis": 1, "sigma": 1, "_": [1, 2], "y": [1, 2], "combin": [1, 2, 4, 6], "theta": [1, 2], "sourc": [1, 2], "epsilon": 1, "formal": 1, "write": [1, 2, 4, 6], "come": [1, 3, 4, 5, 7], "onli": [1, 2, 3, 4, 5, 6], "do": [1, 2, 3, 4, 5, 7], "cleanli": 1, "separ": [1, 4, 5], "minimis": [1, 2], "becaus": [1, 2, 3, 4, 5, 6], "quantiti": 1, "degre": [1, 2, 3, 4], "uncertainti": 1, "effect": [1, 2, 4, 5, 6, 7], "analys": [1, 4], "ratio": [1, 5], "part": [1, 2, 3, 4, 5, 6], "beyond": [1, 2, 6], "addit": [1, 2, 4, 5, 6], "address": [1, 6], "difficulti": [1, 2], "multi": [1, 6], "studi": [1, 6, 7], "although": [1, 2, 3, 4, 5, 6], "gross": 1, "anatomi": [1, 5], "same": [1, 2, 3, 4, 5, 6], "size": [1, 4, 5], "shape": [1, 3, 4, 5], "variabl": [1, 4], "substanti": 1, "caus": [1, 2, 3, 4, 5], "signific": 1, "issu": [1, 2, 3, 4, 5, 6], "localis": [1, 5], "across": [1, 2, 3, 5, 6], "group": [1, 4], "so": [1, 2, 3, 4, 5, 6], "coordin": [1, 6], "space": [1, 2, 4, 6], "becuas": 1, "move": [1, 2, 6], "meet": [1, 3, 5], "assumpt": [1, 3, 5], "differ": [1, 2, 3, 4, 5, 6], "individu": [1, 2], "begin": 1, "standard": [1, 2, 3, 4, 5, 6], "number": [1, 3, 6], "recommend": [1, 5, 6], "new": [1, 3, 6], "firstli": 1, "alwai": [1, 2], "better": [1, 4, 5, 6], "work": [1, 4, 6], "copi": 1, "rather": [1, 4, 6], "than": [1, 2, 3, 4, 5, 6], "origin": [1, 3, 5, 6], "Not": 1, "doe": [1, 3, 5], "easier": [1, 2, 5], "again": [1, 2, 3, 5, 6], "problem": [1, 4, 6], "invis": 1, "header": 1, "remov": [1, 2, 5, 6], "easiest": 1, "wai": [1, 4, 5, 6], "creat": [1, 2, 3, 6], "lot": [1, 6], "folder": 1, "keep": [1, 5], "thing": [1, 5, 6], "organis": 1, "insid": [1, 2], "next": [1, 2, 3], "default": [1, 2, 3, 4, 5, 6], "registr": [1, 2, 4], "between": [1, 2, 3, 4, 5], "earlier": [1, 3, 4, 6], "algorithm": [1, 2, 4, 6], "rough": 1, "manual": [1, 4, 7], "align": [1, 2, 4], "set": [1, 2, 4, 6], "anterior": 1, "commissur": 1, "adjust": [1, 3], "bring": 1, "them": [1, 4, 6, 7], "closer": [1, 3], "One": [2, 3, 6], "biggest": 2, "head": [2, 3, 6], "inevit": 2, "unrealist": 2, "expect": [2, 5], "remain": [2, 5], "perfectli": [2, 5], "still": [2, 4, 6], "durat": 2, "case": [2, 3, 4, 5], "particularli": [2, 3], "bad": [2, 5, 6], "cannot": [2, 3], "even": [2, 3, 5, 6], "seem": [2, 3, 6], "slight": 2, "littl": [2, 5], "3mm": 2, "seriou": [2, 3], "qualiti": [2, 6], "best": [2, 4], "movement": [2, 6], "must": [2, 3, 4], "recognis": 2, "awar": 2, "what": [2, 3, 4, 5, 6, 7], "fix": 2, "There": 2, "two": [2, 3, 4, 6], "main": [2, 3, 4, 5, 6], "suddenli": 2, "disrupt": 2, "record": [2, 3], "compound": 2, "occur": 2, "certain": [2, 4], "condit": 2, "confound": 2, "an": [2, 3, 4, 5, 6], "longer": [2, 3], "continu": 2, "specif": 2, "instead": [2, 3, 4, 6], "sever": [2, 4], "problemat": [2, 3], "tissu": [2, 4, 6], "boundari": [2, 4, 5], "instanc": [2, 4, 6], "outsid": [2, 5], "ventricl": [2, 5], "type": [2, 4], "sudden": [2, 5], "shift": [2, 3, 6], "misconstru": 2, "true": [2, 3, 5], "activ": [2, 5, 7], "20": [2, 6], "middl": [2, 3], "been": [2, 3, 5, 6], "artifici": 2, "right": [2, 3], "back": [2, 5], "without": [2, 6], "highlight": 2, "like": [2, 3, 4, 5, 6], "identifi": [2, 4, 6], "after": [2, 3, 4, 5], "save": [2, 6], "grace": 2, "often": [2, 3, 6], "visibl": 2, "trace": 2, "border": 2, "sit": 2, "along": [2, 3, 5], "edg": 2, "intern": 2, "should": [2, 3, 4, 5], "treat": 2, "extrem": [2, 5], "caution": 2, "exampl": [2, 3, 4, 5, 6], "5": [2, 3], "artefact": [2, 3], "appear": [2, 3, 4, 5], "insidi": 2, "impact": [2, 6], "s": [2, 3, 4], "proton": 2, "neighbour": [2, 5, 6], "excit": 2, "magnet": 2, "gradient": 2, "alter": 2, "exacerb": 2, "inter": 2, "leav": [2, 4], "acquisit": [2, 3, 6], "greater": [2, 3], "importantli": [2, 3, 4], "spin": 2, "histori": 2, "persist": 2, "those": [2, 3, 6], "themselv": 2, "spatail": 2, "techniqu": [2, 5, 6], "ha": [2, 3, 5, 6], "propos": 2, "e": [2, 3, 6], "g": [2, 3, 6], "friston": [2, 4], "et": [2, 3, 6], "al": [2, 3, 6], "1996": 2, "method": [2, 3, 4, 5, 6], "common": 2, "due": [2, 3, 5, 6], "complex": 2, "poor": [2, 4], "influenc": [2, 6], "residu": 2, "pre": [2, 5, 7], "usual": [2, 3, 4, 6], "accommod": [2, 6], "model": [2, 3, 4, 6], "stripe": 2, "imag": [2, 3, 4, 5, 6], "6": 2, "top": [2, 5], "row": [2, 5], "interleav": [2, 3, 6], "bottom": [2, 5], "sequenti": [2, 3], "left": [2, 3], "column": 2, "wherea": [2, 5], "present": [2, 6], "difficult": [2, 6], "It": [2, 5], "plausibl": 2, "frustrat": 2, "harder": [2, 5], "If": [2, 4, 5, 6, 7], "happen": 2, "insepar": 2, "attempt": [2, 3], "reduc": [2, 3, 4, 5, 6], "situat": [2, 6], "becom": [2, 5], "inescap": 2, "turn": 2, "perform": [2, 3, 4, 7], "transform": [2, 4, 6], "one": [2, 3, 4, 5, 6], "anoth": [2, 4, 5, 6], "principl": [2, 4, 6], "allevi": 2, "multipl": [2, 3, 4, 5, 6, 7], "nor": 2, "realign": [2, 4, 5], "7": 2, "poldrack": [2, 4, 5], "mumford": [2, 4, 5], "nichol": [2, 4, 5], "2011": [2, 4, 5, 6], "chosen": [2, 3], "act": 2, "refer": [2, 3, 6], "match": [2, 3], "think": [2, 5], "stai": 2, "perspect": [2, 3, 5, 6], "noth": 2, "uniqu": 2, "mechan": [2, 4], "focu": [2, 6], "hundr": 2, "amount": [2, 3], "least": 2, "squar": 2, "cost": 2, "previou": [2, 4], "small": [2, 5], "close": 2, "optim": 2, "solut": 2, "iter": 2, "converg": 2, "veri": [2, 4, 6], "quickli": 2, "highli": 2, "tune": 2, "version": 2, "output": 2, "know": [2, 3, 6], "estim": [2, 4, 6], "matrix": 2, "mathbf": [2, 6], "t": [2, 6], "target": 2, "matric": [2, 6], "dot": 2, "translat": 2, "rotat": 2, "extract": [2, 4], "plot": [2, 4, 5], "x": 2, "allow": [2, 5, 6], "deviat": 2, "axi": 2, "produc": [2, 6, 7], "onc": [2, 4, 6, 7], "appli": [2, 3, 4, 5, 6], "stage": [2, 3, 6], "advis": 2, "term": [2, 3, 4, 5], "interpol": [2, 3, 6], "itself": 2, "higher": [2, 5, 6], "order": [2, 3, 4, 5, 6], "b": 2, "spline": [2, 3], "gener": [2, 3, 4, 5, 6], "prefer": 2, "evid": [2, 6], "linear": [2, 4, 6], "introduc": [2, 3], "error": [2, 4], "ostuni": 2, "1997": 2, "choos": [2, 5, 6], "highest": [2, 4], "avail": [2, 3, 4, 6], "gain": 2, "accuraci": 2, "undon": 2, "final": [2, 3, 5, 6], "4th": 2, "compromis": 2, "unavoid": 2, "potenti": 2, "damag": 2, "decid": [2, 4, 6], "obviou": 2, "question": [2, 6], "actual": [2, 3, 4, 5, 6], "answer": [2, 5, 6], "steadi": 2, "slow": 2, "mean": [2, 3, 4, 5, 6], "spike": [2, 6], "concern": 2, "accord": 2, "frac": [2, 3], "were": [2, 3, 4, 6, 7], "isotrop": 2, "5mm": 2, "z": 2, "plane": 2, "similar": [2, 4], "calcul": [2, 4, 5], "angl": 2, "distanc": 2, "formula": 2, "arc": 2, "length": [2, 3], "circl": [2, 3], "d": 2, "180": 2, "pi": 2, "r": [2, 6], "radiu": 2, "approxim": [2, 4], "50mm": 2, "power": [2, 6], "2012": [2, 6], "72": 2, "50": 2, "circ": 2, "exclud": 2, "entir": [2, 3, 4, 6], "basi": [2, 4], "larg": [2, 4, 6], "unwis": 2, "magnitud": 2, "extent": [2, 5, 6], "through": [2, 3, 6], "coupl": 2, "recover": 2, "litter": 2, "almost": 2, "certainli": 2, "lost": 2, "9": 2, "enough": [2, 4], "discard": 2, "seen": 2, "whole": [2, 3], "numer": 2, "interfac": 2, "note": [2, 5, 6], "approach": [2, 3, 4, 6], "pass": [2, 5], "procedur": [2, 4], "initi": [2, 6], "idea": [2, 4, 5], "fine": [2, 5], "realist": 2, "huge": [2, 3], "possibl": [2, 3, 4, 6], "spm_realign": 2, "spm_reslic": 2, "replic": [2, 3], "reslic": 2, "modul": [2, 3, 4], "launch": [2, 3, 4], "spm_figur": [2, 4], "getwin": [2, 4], "open": [2, 4], "window": [2, 4, 6], "func": [2, 3, 4], "spm_vol": [2, 3, 4], "ia_preproc_func": 2, "nii": [2, 3, 4, 6], "eopt": 2, "spm_get_default": 2, "option": [2, 6], "struct": 2, "rtm": 2, "0": 2, "mcfunc": 2, "ropt": 2, "interp": 2, "spm12": [2, 3, 4, 5, 6], "v7141": 2, "13": [2, 4], "47": 2, "51": 2, "01": [2, 3, 4], "11": [2, 3, 4], "2023": [2, 3, 4], "print": 2, "figur": [2, 5], "home": 2, "martyn": 2, "spm_2023nov01": 2, "ps": 2, "complet": [2, 3, 6, 7], "48": 2, "04": 2, "05": [2, 3], "acquir": 3, "mri": 3, "instantan": 3, "10": 3, "take": [3, 5, 6], "depend": 3, "upon": 3, "span": 3, "respons": 3, "fall": 3, "Such": 3, "discrep": [3, 5], "thu": [3, 5, 6], "delai": 3, "quit": 3, "sladki": 6, "red": [3, 4], "subsequ": [], "slightli": 5, "reconstruct": 3, "lead": [3, 6], "look": [3, 5], "peak": 3, "did": 3, "normal": 6, "assum": [3, 5, 6], "base": 4, "stimulu": [], "last": 3, "implicitli": [], "simultan": 3, "clearli": 3, "reflect": [], "offset": [3, 6], "successfulli": [], "past": 4, "worslei": 3, "2002": 3, "forward": 3, "backward": 3, "had": 3, "dataset": [3, 6], "knowledg": 3, "intuit": [3, 4], "nearli": [], "halfwai": 3, "blue": [3, 4], "line": [3, 4], "half": [], "Of": 3, "draw": [], "straight": [], "sophist": 6, "accur": [3, 4, 6], "guess": 3, "setup": 3, "elsewher": [], "pleas": [], "rememb": 4, "simpli": [], "garbag": 4, "unlik": [3, 4], "contenti": 3, "affect": [3, 5], "pretti": [], "confid": 3, "spuriou": 3, "alon": [], "feel": [], "uncomfort": [], "down": [], "interact": 3, "emploi": 3, "spread": 5, "artifact": [], "tricki": 6, "revers": [], "univers": [], "necessari": 3, "up": [3, 5, 6], "bigger": 3, "inde": [], "automat": [], "pick": 3, "explor": [3, 6, 7], "detail": [4, 5, 6], "behind": 4, "non": [4, 6], "templat": 4, "neuroanatomi": [4, 5], "quick": 4, "gave": 4, "prevent": [4, 6], "simpl": [4, 5], "affin": [4, 6], "rare": [4, 5], "fit": 4, "regist": 4, "directli": [4, 6], "epi": 4, "mni": 4, "while": 4, "coars": 4, "limit": [4, 5, 6], "improv": [4, 5], "dai": 4, "t1": 4, "high": [4, 5, 6], "much": [4, 6], "paramet": [3, 4, 6], "oppos": 4, "ashburn": 4, "2005": 4, "class": [4, 6], "too": 4, "context": 4, "fail": 4, "fairli": [4, 6], "easili": 4, "weight": [4, 5], "stand": 4, "white": [4, 5], "matter": [4, 5], "brighter": 4, "grei": [4, 5], "csf": 4, "tend": [4, 5], "darkest": 4, "probabl": [4, 6], "defin": [4, 6], "14": 4, "distribut": 4, "notabl": 4, "overlap": [4, 5], "green": 4, "curv": [3, 4], "classifi": 4, "350": 4, "whether": [4, 6], "side": 4, "gaussian": [4, 5], "mixtur": [4, 6], "15": 4, "yellow": 4, "bar": 4, "histogram": 4, "black": 4, "overal": 4, "mix": [4, 6], "recreat": 4, "sine": 4, "cosin": 4, "assess": 4, "belong": 4, "whichev": 4, "allud": [4, 5], "speak": 4, "partial": 4, "straddl": 4, "decis": [4, 6], "tpm": [4, 6], "particular": [3, 4, 6, 7], "compliment": 4, "complic": 4, "bayesian": 4, "prior": 4, "hopefulli": [4, 5, 6], "16": [3, 4], "icbm": 4, "probabilist": 4, "atla": 4, "built": 4, "452": 4, "young": 4, "healthi": 4, "adult": 4, "thei": [3, 4, 5, 6], "warp": [4, 6], "deform": [4, 6], "field": [4, 5, 6], "goe": 4, "byproduct": 4, "construct": 4, "previous": 4, "invert": 4, "air": 4, "sure": [4, 7], "wrong": 4, "happi": 4, "convolv": 5, "kernel": 5, "alreadi": 5, "filter": 5, "materi": 5, "section": [5, 6], "someth": [5, 6], "worth": [5, 6], "face": 5, "destruct": 5, "low": [3, 4, 5], "wors": 5, "17": 5, "topic": 5, "recal": [5, 6], "either": [5, 6], "frequenc": [3, 5], "domain": [3, 5], "convolut": 5, "averag": 5, "correspond": [4, 5], "cancel": 5, "out": [3, 5, 6], "increas": 5, "decreas": 5, "larger": 5, "rel": 5, "stabl": 5, "detect": 5, "18": 5, "taken": [3, 5], "plenti": [5, 6], "lump": 5, "bump": 5, "disappear": 5, "favour": [3, 5], "view": 5, "fast": 5, "lower": 5, "bit": [5, 6], "abov": [5, 6], "explain": 5, "visual": 5, "blurri": 5, "discern": 5, "direct": 5, "sound": 5, "advantag": 5, "looser": 5, "definit": [5, 6], "overcom": 5, "never": 5, "perfect": 5, "somewhat": [3, 5], "constrain": 5, "regularis": 5, "mismatch": 5, "By": 5, "despit": 5, "week": [5, 7], "comparison": 5, "random": 5, "primari": 5, "theoret": 5, "backbon": 5, "valid": 5, "level": [4, 5, 6], "guarante": 5, "met": 5, "third": 5, "justif": 5, "care": 5, "blur": [5, 6], "wider": 5, "smear": 5, "place": 5, "fals": 5, "locat": [3, 5], "avoid": [3, 5], "clear": 5, "caveat": 5, "8mm": 5, "16mm": 5, "32mm": 5, "fwhm": 5, "sensit": 5, "wish": [5, 6], "focus": 5, "minimum": 5, "anywher": 5, "4mm": 5, "hve": 6, "rigid": 6, "learn": 6, "good": [3, 6], "suit": 6, "ask": 6, "yourself": 6, "controversi": 6, "wonder": 6, "author": 6, "argument": 6, "shorter": 6, "especi": 6, "band": 6, "luckili": 6, "surround": 6, "util": 6, "recent": 6, "parker": 6, "razlighi": 6, "2019": 6, "excel": 6, "paper": 6, "read": 6, "long": 6, "short": 6, "overwhelmingli": 6, "benefici": 6, "skip": 6, "stimuli": 6, "block": 6, "event": 6, "exact": 6, "cover": [6, 7], "worri": 6, "benefit": 6, "resampl": 6, "appropri": 6, "easi": 6, "return": 6, "investig": 6, "real": 6, "apart": 6, "destroi": [3, 6], "abil": 6, "correctli": 6, "safest": 6, "bet": 6, "mainli": 6, "realli": 6, "few": 6, "degrad": 6, "awai": 6, "requir": 6, "updat": 6, "mat": 6, "renam": 6, "select": 6, "name": 6, "sw": 6, "swar": 6, "swr": 6, "extra": 6, "softwar": 6, "includ": 6, "regress": 6, "correl": 6, "big": 6, "attribut": 6, "scrub": 6, "censor": 6, "trivial": 6, "briefli": 6, "jonathan": 6, "influenti": 6, "2014": 6, "consensu": 6, "desir": 6, "rid": 6, "worst": 6, "art": 6, "toolbox": [4, 6], "21": 6, "tool": [4, 6], "dissert": 6, "project": 6, "unifi": 6, "invers": 6, "control": 6, "lesion": 6, "similarli": 6, "popul": 6, "children": 6, "elderli": 6, "specidi": 6, "describ": 6, "altay": 6, "2008": 6, "futur": 6, "chart": 6, "22": 6, "guidanc": 6, "rais": 6, "vast": 6, "core": 7, "suitabl": 7, "state": 7, "repeat": [3, 7], "everi": [3, 7], "matlab": 7, "script": [4, 7], "autom": 7, "instruct": 7, "run": 7, "reach": 7, "conclus": 7, "familiar": 7, "test": 7, "being": [3, 4], "On": 3, "ident": 3, "infer": 3, "account": 3, "12": 3, "orang": 3, "cross": 3, "achiev": 3, "equival": 3, "egregi": 3, "With": 3, "metadata": 3, "warn": 3, "bias": 3, "swap": 3, "ring": 3, "wrap": 3, "check": 3, "carefulli": 3, "significantli": 3, "though": 3, "altern": 3, "exist": 3, "saw": 3, "spm_slice_tim": 3, "load": [3, 4], "ria_preproc_func": 3, "nslice": 3, "24": 3, "ta": 3, "sliceord": 3, "refslic": 3, "v6130": 3, "56": [], "26": [], "specifi": 3, "32": [], "59": [], "34": [], "09": 3, "00": 3, "older": 4, "spm_normalis": 4, "spm_write_sn": 4, "addpath": 4, "fullfil": 4, "dir": 4, "oldnorm": 4, "add": 4, "old": 4, "aria_preproc_func": 4, "incorrect": [], "usag": [], "under": 4, "mfunc": 4, "meania_preproc_func": 4, "anat": 4, "ia_preproc_anat": 4, "coregist": 4, "spm_coreg": 4, "v7320": 4, "29": 4, "55": 4, "operand": 4, "logic": 4, "AND": 4, "OR": 4, "oper": 4, "convert": 4, "scalar": 4, "loaduint8": 4, "229": 4, "v": 4, "pinfo": 4, "127": 4, "vg": 4, "uint8": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "content": 0, "The": [1, 3], "structur": 1, "fmri": [1, 2, 5], "data": [1, 2, 4, 5], "4d": 1, "imag": 1, "explor": 1, "an": 1, "exampl": 1, "dataset": 1, "need": [1, 6], "preprocess": [1, 6], "preliminari": 1, "step": [2, 3, 4, 5], "1": 2, "motion": [2, 6], "correct": [2, 3, 6], "problem": [2, 3], "With": 2, "corrupt": 2, "time": [2, 3, 6], "seri": 2, "signal": 2, "measur": 2, "correl": 2, "task": 2, "theori": 2, "paramet": 2, "resampl": 2, "how": [2, 5], "much": [2, 5], "too": 2, "spm": [2, 3, 4, 5], "us": [2, 3, 4, 6], "graphic": [2, 3, 4], "batch": [2, 3, 4], "system": [2, 3, 4], "matlab": [2, 3, 4], "code": [2, 3, 4], "2": 3, "slice": [3, 6], "controversi": 3, "3": 4, "normalis": [4, 6], "unifi": 4, "segment": [4, 6], "function": [4, 5], "4": 5, "smooth": 5, "why": 5, "build": 6, "pipelin": 6, "do": 6, "we": 6, "alwai": 6, "should": 6, "perform": 6, "first": 6, "reslic": 6, "dure": 6, "realign": 6, "can": 6, "more": 6, "about": 6, "modul": 6, "pre": 6, "process": 6, "flowchart": 6, "summari": 7, "quiz": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})