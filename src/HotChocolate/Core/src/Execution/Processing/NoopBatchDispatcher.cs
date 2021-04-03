using System;
using HotChocolate.Fetching;

namespace HotChocolate.Execution.Processing
{
    internal class NoopBatchDispatcher
        : IBatchDispatcher
    {
        public void Register(IExecutionContext context)
        {
        }

        public void Unregister(IExecutionContext context)
        {
        }

        public void Suspend()
        {
        }

        public void Resume()
        {
        }

        public static NoopBatchDispatcher Default { get; } = new NoopBatchDispatcher();
    }
}