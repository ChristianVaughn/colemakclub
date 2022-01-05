var keyboardDivs = `

	<div class=row>
		<div class="key down3"><span class="letter"></span></div>
		<div class="key down2" id='KeyQ'><span class="letter"></span></div>
		<div class="key down1" id='KeyW'><span class="letter"></span></div>
		<div class="key" id='KeyE'><span class="letter"></span></div>
		<div class="key lvl3 down1" id='KeyR'><span class="letter"></span></div>
		<div class="key lvl3 down2" id='KeyT'><span class="letter"></span></div>
		<div class="key down3" id='BracketLeft'><span class="letter"></span></div>
		<div class="key invis"><span class="letter"></span></div>

		<div class="key down3" id='BracketRight'><span class="letter"></span></div>
		<div class="key lvl3 down2" id='KeyY'><span class="letter"></span></div>
		<div class="key lvl3 down1" id='KeyU'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyI'><span class="letter"></span></div>
		<div class="key lvl5 down1" id='KeyO'><span class="letter"></span></div>
		<div class="key lvl5 down2" id='KeyP'><span class="letter"></span></div>
		<div class="key down3" id='Backslash'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key down3"><span class="letter"></span></div>
		<div class="key lvl1 down2" id='KeyA'><span class="letter"></span></div>
		<div class="key lvl1 down1" id='KeyS'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyD'><span class="letter"></span></div>
		<div class="key lvl1 restingPosition down1" id='KeyF'><span class="letter"></span></div>
		<div class="key lvl2 down2" id='KeyG'><span class="letter"></span></div>
		<div class="key down3" id='BracketLeft'><span class="letter"></span></div>
		<div class="key invis"><span class="letter"></span></div>

		<div class="key down3" id='BracketRight'><span class="letter"></span></div>
		<div class="key lvl2 down2" id='KeyH'><span class="letter"></span></div>
		<div class="key lvl1 restingPosition down1" id='KeyJ'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyK'><span class="letter"></span></div>
		<div class="key lvl1 down1" id='KeyL'><span class="letter"></span></div>
		<div class="key lvl1 down2" id='Semicolon'><span class="letter"></span></div>
		<div class="key down3" id='Quote'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key down3"><span class="letter"></span></div>
		<div class="key down2" id='KeyZ'><span class="letter"></span></div>
		<div class="key lvl6 down1" id='KeyX'><span class="letter"></span></div>
		<div class="key lvl6" id='KeyC'><span class="letter"></span></div>
		<div class="key lvl4 down1" id='KeyV'><span class="letter"></span></div>
		<div class="key lvl4 down2" id='KeyB'><span class="letter"></span></div>
		<div class="key down3 spaceOne"><span class="letter"></span></div>
		<div class="key invis"><span class="letter"></span></div>
		<div class="key down3 spaceThree"><span class="letter"></span></div>

		<div class="key lvl4 down2" id='KeyN'><span class="letter"></span></div>
		<div class="key lvl4 down1" id='KeyM'><span class="letter"></span></div>
		<div class="key lvl5" id='Comma'><span class="letter"></span></div>
		<div class="key lvl6 down1" id='Period'><span class="letter"></span></div>
		<div class="key lvl6 down2" id='Slash'><span class="letter"></span></div>
		<div class="key down3"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key down3"><span class="letter"></span></div>
		<div class="key down2"><span class="letter"></span></div>
		<div class="key down1"><span class="letter"></span></div>
		<div class="key "><span class="letter"></span></div>
		<div class="key modifierLeft down2 "><span class="letter"></span></div>
		<div class="key invis"><span class="letter"></span></div>
		<div class="key down3 spaceTwo"><span class="letter"></span></div>
		<div class="key invis"><span class="letter"></span></div>

		<div class="key down3 spaceFour"><span class="letter"></span></div>
		<div class="key invis"><span class="letter"></span></div>
		<div class="key modifierRight down2"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key down1"><span class="letter"></span></div>
		<div class="key down2"><span class="letter"></span></div>
		<div class="key down3"><span class="letter"></span></div>
	</div>
`;

var customLayout = `
	<div class=row>
		<div class="cKey rowStart" id='customBackquote'><span class="letter"></span></div>
		<div class="cKey" id='customDigit1'><span class="letter"></span></div>
		<div class="cKey" id='customDigit2'><span class="letter"></span></div>
		<div class="cKey" id='customDigit3'><span class="letter"></span></div>
		<div class="cKey" id='customDigit4'><span class="letter"></span></div>
		<div class="cKey" id='customDigit5'><span class="letter"></span></div>
		<div class="cKey" id='customDigit6'><span class="letter"></span></div>
		<div class="cKey" id='customDigit7'><span class="letter"></span></div>
		<div class="cKey" id='customDigit8'><span class="letter"></span></div>
		<div class="cKey" id='customDigit9'><span class="letter"></span></div>
		<div class="cKey" id='customDigit0'><span class="letter"></span></div>
		<div class="cKey" id='customMinus'><span class="letter"></span></div>
		<div class="cKey" id='customEqual'><span class="letter"></span></div>
		<div class="cKey twou rowEnd" id='customBackSpace'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey onepointfiveu rowStart" id='customTab' ><span class="letter"></span></div>
		<div class="cKey normalCKey selectedInputKey defaultSelectedKey" id='customKeyQ'><span  class="letter pulse">_</span></div>
		<div class="cKey normalCKey" id='customKeyW'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyE'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyR'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyT'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyY'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyU'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyI'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyO'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyP'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customBracketLeft'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customBracketRight'><span  class="letter"></span></div>
		<div class="cKey onepointfiveu rowEnd" id='customBackslash'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey onepointsevenfiveu rowStart" id='customCapsLock'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyA'>
			<span class="letter"></span>
		</div>
		<div class="cKey lvl1 normalCKey" id='customKeyS'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyD'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey restingPosition" id='customKeyF'><span class="letter"></span></div>
		<div class="cKey lvl2 normalCKey" id='customKeyG'><span class="letter"></span></div>
		<div class="cKey lvl2 normalCKey" id='customKeyH'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey restingPosition" id='customKeyJ'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyK'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyL'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customSemicolon'><span class="letter"></span></div>
		<div class="cKey normalCKey" id='customQuote'><span class="letter"></span></div>
		<div class="cKey twopointtwofiveu rowEnd" id='customEnter'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey twopointtwofiveu rowStart"><span class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyZ'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customKeyX'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customKeyC'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyV'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyB'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyN'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyM'><span class="letter"></span></div>
		<div class="cKey lvl5 normalCKey" id='customComma'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customPeriod'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customSlash'><span class="letter"></span></div>
		<div class="cKey twopointsevenfiveu rowEnd finalKey"><span class="letter"></span></div>
	</div>
	<div class='row'>
		<div class="cKey onepointtwofiveu rowStart"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey sixpointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu rowEnd"><span class="letter"></span></div>
	</div>
`;
