import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveRegularProps = Omit<IconBaseProps, 'children'>;

const SaveRegular = memo(
  forwardRef<SVGSVGElement, SaveRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="save" {...props}>
      <path d="M15 5.25c.9 0 1.45 0 1.93.1a4.8 4.8 0 0 1 3.73 3.72c.1.48.09 1.04.09 1.93v2.8c0 1.25 0 2.23-.06 3.02a5 5 0 0 1-.51 2.06c-.5 1-1.3 1.8-2.3 2.3q-.89.43-2.06.5c-.8.07-1.77.07-3.02.07h-1.6c-1.25 0-2.23 0-3.02-.06a5 5 0 0 1-2.06-.51c-1-.5-1.8-1.3-2.3-2.3a5 5 0 0 1-.5-2.06c-.07-.8-.07-1.77-.07-3.02V11c0-.9 0-1.45.1-1.93a4.8 4.8 0 0 1 3.72-3.73c.48-.1 1.04-.09 1.93-.09a.75.75 0 0 1 0 1.5c-.96 0-1.34 0-1.63.06A3.3 3.3 0 0 0 4.8 9.37c-.06.3-.06.67-.06 1.63v2.8c0 1.27 0 2.18.06 2.9.06.7.17 1.15.35 1.5.36.7.93 1.28 1.64 1.64.36.18.8.3 1.5.35.72.06 1.63.06 2.9.06h1.6c1.27 0 2.18 0 2.9-.06.7-.06 1.14-.17 1.5-.35.7-.36 1.28-.93 1.64-1.64.18-.35.3-.8.35-1.5.06-.72.06-1.63.06-2.9V11c0-.96 0-1.34-.06-1.63a3.3 3.3 0 0 0-2.56-2.56A10 10 0 0 0 15 6.75a.75.75 0 0 1 0-1.5" />
        <path d="M12 1.75c.41 0 .75.34.75.75v10.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SaveRegular.displayName = 'SaveRegular';

// Triple export pattern (lucide-react style)
export { SaveRegular, SaveRegular as SaveRegularIcon, SaveRegular as SiSaveRegular };
export default SaveRegular;
export type { SaveRegularProps };
