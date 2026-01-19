import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, CodeSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-square-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07zm-2 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h2c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-2c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.79 7.26a.75.75 0 0 1 1.42.48l-3 9a.75.75 0 0 1-1.42-.48zM7.47 9.47a.75.75 0 1 1 1.06 1.06L7.06 12l1.47 1.47a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zM15.47 9.47c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06L16.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CodeSquareRegularDuotone.displayName = 'CodeSquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { CodeSquareRegularDuotone, CodeSquareRegularDuotone as CodeSquareRegularDuotoneIcon, CodeSquareRegularDuotone as SiCodeSquareRegularDuotone };
export type { CodeSquareRegularDuotoneProps };
