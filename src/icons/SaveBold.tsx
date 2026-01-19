import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SaveBoldProps = Omit<IconBaseProps, 'children'>;

const SaveBold = memo(
  forwardRef<SVGSVGElement, SaveBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="save-bold" {...props}>
      <path fill="currentColor" d="M16 3c.88 0 1.47 0 1.98.1a5 5 0 0 1 3.92 3.92c.1.51.1 1.1.1 1.98v4q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13V9c0-.88 0-1.47.1-1.98A5 5 0 0 1 6.02 3.1C6.53 3 7.12 3 8 3a1 1 0 1 1 0 2c-.98 0-1.32 0-1.58.06a3 3 0 0 0-2.36 2.36C4 7.68 4 8.02 4 9v4c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2V9c0-.98 0-1.32-.06-1.58a3 3 0 0 0-2.36-2.36A10 10 0 0 0 16 5a1 1 0 0 1 0-2" />
        <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v10.09l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SaveBold.displayName = 'SaveBold';

// Triple export pattern (lucide-react style)
export { SaveBold, SaveBold as SaveBoldIcon, SaveBold as SiSaveBold };
export default SaveBold;
export type { SaveBoldProps };
