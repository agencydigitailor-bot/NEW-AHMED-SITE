# AOM Air Ambulance — 2026 Brochure Refresh
## Content Brief + AI Production Prompt Library

Source: 2023 brochure ("pdf urgence copy litee.pdf", 6 pages) + aom-airambulance.ma  
Goal: same copy/structure, elevated visuals and layout for 2026 print + digital use.

---

## 0. Before you generate anything: a note on AI vs. real photography

AOM sells trust in a life-or-death moment — accreditation (EURAMI), aircraft, and real
medical crews are the credibility signal. For **people, aircraft, and medical equipment**,
real photography (or a professional retouch/relight of the existing shoot) will read as
more credible than AI-generated humans, and avoids any "uncanny valley" risk on a
healthcare brand. Recommended split:

- **Keep real photography** for: crew portraits, aircraft exteriors/interiors, stretcher/incubator
  loading scenes, hangar shots. Use AI only to *upscale, relight, retouch, or extend* these
  (background extension, sky replacement, color grading) — not to fabricate people.
- **Use AI generation freely** for: backgrounds, gradients, the arabesque/mosaic pattern
  motif, icon sets, map/route graphics, texture overlays, abstract medical/aviation
  elements, and full illustrative graphics (fleet diagrams, world map).
- **Hybrid** for the cover/hero: AI-extended or AI-relit version of a real photo, composited
  with new typography.

The prompts below are written for both cases — "extend/relight" prompts for real-photo
pages, and "generate" prompts for pure-graphic elements. Any tool that takes a text +
reference-image input works (Nano Banana Pro, Firefly, Midjourney w/ image prompt, etc.).

---

## 1. Brand system to lock before generating

Carry these into every prompt so outputs stay consistent:

- **Palette:** deep navy blue (`#1B2A5B`-ish), signature red (`#C8102E`-ish), white, with the
  arabesque/mosaic red medallion motif as a recurring accent (used as dividers, bullet
  icons, and the circular logomark).
- **Typography mood:** clean geometric sans-serif for headings (Montserrat family in the
  original), plenty of white space, red underline rules beneath section headers.
- **Motif:** Moroccan geometric mosaic pattern (star/medallion) — currently used as a
  footer border and icon background. Worth expanding into a signature graphic device for
  2026 (e.g., as a subtle full-bleed watermark, section dividers, or die-cut cover element).
- **Logo lockups:** "Air Ocean Maroc — Air Ambulance" wordmark + red medical star-of-life
  icon; EURAMI Accredited Provider badge (page 6) must stay legible and untouched — it's
  a certification mark, don't AI-stylize it.
- **Tone:** professional, calm, precise — "trusted partner in saving lives," not stock-photo
  generic. Aircraft and medical staff should look genuinely operational, not glamorized.

---

## 2. Page-by-page content (unchanged) + 2026 visual direction + prompts

### Page 1 — Cover
**Copy (keep as-is):**
> CONNECTING THE HEART OF AFRICA WITH THE WORLD  
> [Air Ocean Maroc — Air Ambulance logo]  
> 24/7 Mission Control Center · +212 5 37 91 16 16 · www.aom-airambulance.ma

**Current visual:** medics wheeling a red medical backpack + incubator toward the aircraft door, blue dusk sky, mosaic pattern footer strip.

**2026 direction:** Same beat, shot/rendered wider and more cinematic — more sky, more
scale on the aircraft, a stronger sense of "Africa to the world" (horizon line, warm-to-cool
gradient sky). This is the one page worth a genuine re-shoot if budget allows; otherwise
extend/relight the existing plate.

**Prompt — hero extend/relight (image-to-image, use existing cover photo as reference):**
```
Extend and relight this air ambulance tarmac photo into a wide cinematic 3:2 hero
composition. Keep the medical crew, red equipment bags, incubator stretcher, and aircraft
exactly as photographed — do not alter faces or equipment. Extend the sky upward and to
both sides with a dramatic dusk gradient, deep navy blue at the top fading to warm amber
at the horizon, a few soft clouds. Add subtle atmospheric haze near the tarmac for depth.
Increase contrast slightly, cool the shadows toward navy blue, keep skin tones natural.
Leave clean negative space in the upper third for large white headline typography.
Photographic, editorial aviation-brand quality, no added text, no logos.
```

**Prompt — alternative full AI hero (if no re-shoot, generate fresh):**
```
Editorial photograph, dusk tarmac at a private airport in Morocco, a white medically
configured jet with red "AIR AMBULANCE" lettering and open cabin door, air stairs down,
two paramedics in navy-blue flight suits wheeling a neonatal incubator stretcher and
red medical backpacks toward the aircraft, motion caught mid-stride, shot from a low
three-quarter angle with a wide-angle lens, deep navy sky graduating to warm amber at
the horizon, runway lights beginning to glow, shallow atmospheric haze, color grade:
navy blues and warm ambers with a single red accent, editorial aviation photography,
sharp focus on subjects, generous negative space in upper third for headline text,
no visible faces in close detail, 3:2 aspect ratio.
```

**Prompt — mosaic footer / brand pattern strip (pure graphic, reusable across pages):**
```
Seamless, tileable Moroccan geometric mosaic pattern, eight-pointed star medallions,
line art in deep red on white, fine 1px linework, symmetrical, flat vector style, no
gradients, no shadows, suitable as a thin horizontal border strip, high resolution,
transparent background.
```

---

### Page 2 — Introduction / "How we do this?"
**Copy (keep as-is):**
> The First Air Medical and the only EURAMI accredited company in Morocco and
> North-Africa offering worldwide patient transportations and a wide range of medical
> flight services.  
> We are a specialized emergency air medical transporter... [full paragraph]  
> Over the past years, we've completed thousands of medical evacuations and
> repatriation missions worldwide.  
> **How we do this?** In survey after survey, we gained a deep understanding of the
> needs and expectations of our Customers...

**Current visual:** wide banner photo — paramedic + colleague beside ambulance/incubator on the runway; navy full-bleed callout band below for "How we do this?"

**2026 direction:** Keep the banner-photo-over-text-block structure (it works), but tighten
the crop for a more premium magazine feel and add a subtle mosaic-pattern icon set to
replace the plain red dot bullets.

**Prompt — banner relight/extend:**
```
Relight and crop this photo of two paramedics and a neonatal transport incubator beside
an ambulance on an airport apron into a wide 16:5 banner. Preserve the people, uniforms,
and equipment exactly as photographed. Push the sky to a clean, slightly desaturated blue,
even soft daylight, minor contrast boost, subtle vignette at the edges to draw focus to
the incubator. Crop tightly for a magazine-banner feel with clear space at the very top
for a thin navy rule.
```

**Prompt — icon set (reusable small graphics, "how we do this" bullets):**
```
Set of 6 minimalist line icons in deep red on transparent background, 2px stroke weight,
rounded joints, consistent 64x64px grid: (1) stethoscope, (2) handshake/care, (3) headset
with 24/7 badge, (4) globe with flight path, (5) medical star of life, (6) checklist/
clipboard. Flat, no fill, no gradients, icon-font style, matching a Moroccan-mosaic-inspired
geometric aesthetic, evenly weighted linework.
```

---

### Page 3 — Fleet & Wing to Wing
**Copy (keep as-is):** Learjet 45XR (x2 configs), Hawker 800 XPi, King Air 200 — capacity/
range/speed specs; "Wing-To-Wing" partner network paragraph.

**Current visual:** dark hangar background with "Air Ocean" wordmark ghosted large behind
the spec cards; three-aircraft nose-on lineup photo at the bottom.

**2026 direction:** This page is spec-heavy — the win is a cleaner data-card system, not
new photography. Keep the real aircraft photos; regenerate only the background texture
and add a simple aircraft-silhouette diagram to make the spec comparison scannable at a
glance (a common brochure convention this one is currently missing).

**Prompt — hangar background texture:**
```
Dark, moody aviation hangar interior background, corrugated metal wall texture, soft
directional light from the upper left, deep navy-to-charcoal gradient, very subtle,
low-contrast so text and photos remain fully legible on top, no visible people, no
logos, wide 1:1 or landscape format, photographic texture suitable as a page background
layer.
```

**Prompt — aircraft spec-comparison diagram (new element):**
```
Clean technical line-art side-profile silhouettes of four private jets in a single row for
scale comparison: a Learjet 45XR, a Hawker 800XPi, and a King Air 200, consistent thin
white or light-grey outline style on a dark navy background, evenly scaled to true
relative size, minimalist aviation-blueprint aesthetic, small dashed length-indicator line
beneath each silhouette, no color fill, no shadows, vector style.
```

**Prompt — three-jet tarmac lineup (extend/relight of existing bottom photo):**
```
Relight this nose-on lineup of three aircraft on a tarmac into an even, slightly overcast
daylight look. Preserve all aircraft exactly as photographed. Extend the tarmac and sky
gently on both sides for a wider crop, keep reflections on the tarmac subtle, cool grey-
blue color grade consistent with the rest of the brochure, clean horizon line, no visible
people added.
```

---

### Page 4 — Medical Equipment / Medical Team
**Copy (keep as-is):**
> Medical Equipment: High quality, state of art medical equipment. Medicines for pain
> control... Special pediatric equipment... Robust equipment governance procedures.
> Oxygen supply for ventilation for long haul flights.  
> Medical Team: We employ the best experienced practicing medical staff...

**Current visual:** navy header block with icon list; PPE-suited crew loading a patient
stretcher into the aircraft (COVID-era isolation transport photo).

**2026 direction:** The isolation-transport photo now reads as dated/pandemic-specific.
Recommend swapping for a current infectious-disease-unit or standard ICU stretcher
loading photo if AOM has 2025/2026 assets (the site references an active Infectious
Diseases Unit, so this could stay conceptually but should look current, not 2020-coded).
Refresh the icon tiles to match the new icon set from Page 2.

**Prompt — updated equipment-loading photo (if no new plate exists, generate placeholder for client review):**
```
Editorial photograph, two medical crew members in modern navy-blue AOM flight suits
(not full hazmat PPE) carefully loading a patient on a transport stretcher into a white
air ambulance jet, portable ventilator and monitor visible and secured on the stretcher,
midday even light, tarmac setting, shallow depth of field with the aircraft cabin door in
soft focus behind, color grade consistent with navy/red brand palette, no visible patient
face, professional medical-transport photography style, 4:3 ratio.
```

**Prompt — equipment icon tiles (matching set 2):**
```
Set of 6 minimalist line icons in white on solid deep-navy rounded-square tiles, 2px red
accent stroke on one key element per icon: (1) medical kit/first-aid case, (2) IV drip /
medicine vial, (3) baby/pediatric care hands, (4) shield with cross (governance/safety),
(5) oxygen tank with airflow lines, (6) ventilator. Consistent 96x96px grid, flat design,
no gradients, no drop shadows.
```

---

### Page 5 — Closing statement
**Copy (keep as-is):**
> AOM Air Ambulance — Kingdom of Morocco  
> "When Seconds Count AOM Air Ambulance Is Your Trusted Partner In Saving Lives."  
> Maamar al Battani Street, Agdal, Rabat · +212 5 37 91 16 16 ·  
> sales@airocean.ma / www.aom-airambulance.ma

**Current visual:** full team + aircraft group photo across the top third, then a large
quiet white space for the pull-quote, contact bar at the bottom.

**2026 direction:** Keep this structure — it's the strongest page in the current deck
(good use of white space, confident pull-quote). Just refresh the group photo crop and
make sure the QR code is regenerated for any updated URL/contact flow.

**Prompt — group photo relight/extend:**
```
Relight this group photo of pilots and medical crew standing beside an air ambulance jet
into warm, even late-afternoon light. Preserve every person and the aircraft exactly as
photographed — do not alter faces, poses, or uniforms. Extend the tarmac and sky slightly
on both sides for a wider banner crop, gentle warm highlight on the aircraft fuselage,
color grade to match navy/red brand palette, clean horizon, subtle long shadows for a
"golden hour, mission-ready" mood.
```

**Prompt — QR code frame (graphic):**
```
Simple square QR-code holder frame, thin red rounded-corner border matching the mosaic
motif's line weight, small red star-of-life mark in one corner, white background, minimal,
leaves full open space in the center for a QR code to be placed, vector style.
```

---

### Page 6 — 24/7 Operation Center + Accreditation
**Copy (keep as-is):**
> 24/7 Operation Center: AOM Air Ambulance Operation center is staffed round the clock
> (24/7/365)...  
> Accreditation: We comply with the highest international standards in Critical Care,
> Advanced Life Support and flight safety...  
> [EURAMI Accredited Provider badge]

**Current visual:** black-and-white hangar exterior photo with "Air Ocean Maroc" signage,
navy text-block overlay, EURAMI badge bottom right.

**2026 direction:** Keep the desaturated hangar treatment — it reads premium and lets the
badge and navy overlay pop. Just make sure the overlay text block has enough contrast and
the badge stays crisp and untouched.

**Prompt — hangar exterior treatment:**
```
Convert this hangar exterior photograph to a refined duotone: deep navy blue shadows,
neutral warm-grey midtones and highlights, subtle desaturation, slight grain for texture,
keep the "Air Ocean Maroc" signage and aircraft nose fully legible and undistorted. Add a
soft vignette on the left and bottom edges to create clear negative space for a navy text
overlay panel on the right side. Cinematic, premium industrial photography mood.
```

**Note on the EURAMI badge:** do not run the accreditation badge through any AI
stylization/regeneration step — certification marks must be reproduced exactly as issued.
Just re-export it at higher resolution from the official EURAMI asset if available.

---

## 3. Extra assets worth producing for the 2026 refresh (not in the 2023 version)

- **World/Africa route map graphic** — brand did the "connecting Africa with the world"
  headline but never visualizes it. A simple line-art map with a few illustrative flight
  arcs from Rabat/Benslimane outward would reinforce page 1's promise.
  ```
  Minimalist world map in flat line-art style, white landmasses with thin grey outlines
  on a deep navy background, Africa slightly emphasized with a subtle red glow, 3–4 soft
  curved dashed flight-path arcs radiating from a marked point in Morocco toward Europe,
  the Gulf, and sub-Saharan Africa, small red plane icon at the path midpoints, clean
  vector aesthetic, no text labels, wide 16:9 format.
  ```
- **Social/digital crop variants** — once the print layout is locked, regenerate the cover
  hero at 1:1 and 9:16 crops for Instagram/LinkedIn using the same extend/relight prompt
  logic above with the aspect ratio swapped.
- **Full-bleed mosaic watermark** — a very low-opacity version of the pattern-strip prompt
  above, scaled up, for use as a subtle full-page background texture on section dividers.

---

## 4. Suggested production order

1. Lock brand system (Section 1) with the design team.
2. Re-shoot or source updated photography for Page 4 (retire the PPE/COVID imagery)
   and, budget-permitting, Page 1's hero — these are the two weakest/most dated plates.
3. Run extend/relight prompts on the remaining real photos (Pages 2, 3, 5, 6).
4. Generate the pure-graphic library: mosaic pattern, two icon sets, aircraft silhouette
   diagram, route map, QR frame.
5. Assemble in layout software; keep copy blocks unchanged from the 2023 brochure text
   captured in Section 2 above.
