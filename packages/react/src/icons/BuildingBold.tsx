import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BuildingBoldProps = Omit<IconBaseProps, 'children'>;

const BuildingBold = memo(
  forwardRef<SVGSVGElement, BuildingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.1 11.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6M14.6 11.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9H14a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6M10.1 8c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9h-.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.6M14.6 8c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9H14a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.6M10.1 4.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6M14.6 4.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9H14a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6" />
        <path fill="currentColor" fillRule="evenodd" d="M15.8 0q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v15.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H8.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.02-.3-.03-.64V4.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16A3 3 0 0 1 5.63.33c.39-.2.78-.27 1.17-.3Q7.4-.01 8.2 0zm-5.55 19a.25.25 0 0 0-.25.25V22h4v-2.75a.25.25 0 0 0-.25-.25zM8.2 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C6 3.25 6 3.62 6 4.2v16.33l.02.5c.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.25.02.56.02 1.03.02v-2.75C8 18.01 9 17 10.25 17h3.5c1.24 0 2.25 1 2.25 2.25V22q.67 0 1.03-.02c.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23V4.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C16.75 2 16.38 2 15.8 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BuildingBold.displayName = 'BuildingBold';

// Triple export pattern (lucide-react style)
export { BuildingBold, BuildingBold as BuildingBoldIcon, BuildingBold as SiBuildingBold };
export type { BuildingBoldProps };
